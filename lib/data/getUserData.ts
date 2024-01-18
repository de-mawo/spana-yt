import { getCurrentUser } from "../session";
import prisma from "@/lib/prisma";

export async function getAllUsers() {
    const loggedInUser = await getCurrentUser();
    if (!loggedInUser) {
      return [];
    }
    const isAdmin = loggedInUser.role === "ADMIN";
  
    if (!isAdmin) {
      return [];
    }
    try {
      const usersData = await prisma.user.findMany({
        orderBy: [{ name: "desc" }],
      });
  
      return [...usersData];
    } catch (error: any) {
      console.error("Error fetching all users:", error);
      throw new Error("Error fetching all users");
    }
  }