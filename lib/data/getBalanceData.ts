import { getCurrentUser } from "@/lib/session";
import prisma from "@/lib/prisma";

export async function getUserBalances() {
  const loggedInUser = await getCurrentUser();
  if (!loggedInUser) {
    return {};
  }
  try {
    const email = loggedInUser.email as string;
    const year = new Date().getFullYear().toString();

    const balances = await prisma.balances.findFirst({
      where: {
        email,
        year,
      },
    });

    return balances;
  } catch (error) {
    console.error("Error fetching user leave days:", error);
    throw new Error("Error fetching user leave days");
  }
}

export async function getAllBalances() {
  const loggedInUser = await getCurrentUser();
  if (!loggedInUser) {
    return [];
  }
  const isAdmin = loggedInUser.role === "ADMIN";

  if (!isAdmin) {
    return [];
  }
  try {
    const balances = await prisma.balances.findMany({
      orderBy: [{ year: "desc" }],
    });

    return [...balances];
  } catch (error: any) {
    console.error("Error fetching all balances :", error);
    throw new Error("Error fetching all balances");
  }
}
