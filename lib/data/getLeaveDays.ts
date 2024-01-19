import { getCurrentUser } from "../session";

export async function getAllLeaveDays() {
    const loggedInUser = await getCurrentUser();
    if (!loggedInUser) {
      return [];
    }
    const isAdmin = loggedInUser.role === "ADMIN";
  
    if (!isAdmin) {
      return [];
    }
    try {
      const leaves = await prisma.leave.findMany({
        orderBy: [{ createdAt: "desc" }],
      });
  
      return [...leaves];
    } catch (error: any) {
      console.error("Error fetching all leave days:", error);
      throw new Error("Error fetching all leave days");
    }
  }
  

  export async function getUserLeaveDays() {
    const loggedInUser = await getCurrentUser();
    if (!loggedInUser) {
      return [];
    }
    try {
      const userEmail = loggedInUser.email as string;
      const leaves = await prisma.leave.findMany({
        where: {
          userEmail,
        },
        orderBy: [{ createdAt: "desc" }],
      });
  
      return [...leaves];
    } catch (error) {
      console.error("Error fetching user leave days:", error);
      throw new Error("Error fetching user leave days");
    }
  }

