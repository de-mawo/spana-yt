import { getCurrentUser } from "@/lib/session";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

type EditUserBody = {
  phone: string;
  department: string;
  id: string;
  title: string;
  role: Role;
}

export async function PATCH(req: Request) {
  const loggedInUser = await getCurrentUser();
  if (loggedInUser?.role !== "ADMIN") {
    throw new Error("You are not permitted to perfom this action");
  }

  try {
    const body: EditUserBody = await req.json();

    const { phone, department, id, role, title } = body;

    await prisma.user.update({
      where: { id },
      data: { phone, department, role, title },
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
