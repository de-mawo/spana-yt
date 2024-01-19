import calculateAndUpdateBalances from "@/lib/calculateBalances";
import { getCurrentUser } from "@/lib/session";
import { LeaveStatus } from "@prisma/client";
import { NextResponse } from "next/server";

type EditBody = {
  notes: string;
  status: LeaveStatus;
  id: string;
  days: number;
  type: string;
  year: string;
  email: string;
  user: string
  startDate: string
}

export async function PATCH(req: Request) {
  const loggedInUser = await getCurrentUser();
  if (loggedInUser?.role !== "ADMIN" && loggedInUser?.role !== "MODERATOR") {
    throw new Error("You are not permitted to perfom this action");
  }

  try {
    const body: EditBody = await req.json();

    const { notes, status, id, days, type, year, email, user, startDate } = body;

    const updatedAt = new Date().toISOString();
    const moderator = loggedInUser.name;

    if (status === LeaveStatus.APPROVED) {
      await calculateAndUpdateBalances(email, year, type, days);
      const title = `${user} on Leave`
      const description = `For ${days} days`
      await prisma.events.create({
        data: {
          startDate,
          title,
          description,
        },
      });
    }
    await prisma.leave.update({
      where: { id },
      data: { moderatorNote: notes, status, updatedAt, moderator },
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
