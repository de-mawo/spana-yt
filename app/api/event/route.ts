import { getCurrentUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

type SubmittedEvent = {
  title: string;
  description: string;
  startDate: string;
};

export async function POST(req: NextRequest) {
  const loggedInUser = await getCurrentUser();
  if (loggedInUser?.role !== "ADMIN") {
    throw new Error("You are not permitted to perfom this action");
  }

  try {
    const body: SubmittedEvent = await req.json();

    const { title, description, startDate } = body;
    await prisma.events.create({
      data: {
        startDate,
        title,
        description,
      },
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
