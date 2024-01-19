import { getCurrentUser } from "@/lib/session";
import { Role } from "@prisma/client";

import { NextResponse } from "next/server";

interface EditBody {
  [key: string]: number | string;
  id: string;
}
const allowedRoles = ["ADMIN", "MODERATOR"];

export async function PATCH(req: Request) {
  const loggedInUser = await getCurrentUser();
  if (!allowedRoles.includes(loggedInUser?.role as Role)) {
    throw new Error("You are not permitted to perform this action");
  }

  try {
    const body: EditBody = await req.json();

    const { id, ...data } = body;

    await prisma.balances.update({
      where: { id },
      data,
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
