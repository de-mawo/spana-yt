import { Balances } from "@prisma/client";

export default async function calculateAndUpdateBalances(
  email: string,
  year: string,
  type: string,
  days: number
): Promise<void> {
  const balance = await prisma.balances.findFirst({
    where: {
      email,
      year,
    },
  });

  if (!balance) {
    throw new Error("Balance not found for the specified user and year");
  }

  let balanceUpdate: Partial<Balances> = {};

  switch (type) {
    case "ANNUAL":
      balanceUpdate = {
        annualUsed: (balance.annualUsed as number) + days,
        annualAvailable:
          (balance.annualCredit as number) -
          ((balance.annualUsed as number) + days),
      };
      break;
    case "FAMILY":
      balanceUpdate = {
        familyUsed: (balance.familyUsed as number) + days,
        familyAvailable:
          (balance.familyCredit as number) -
          ((balance.familyUsed as number) + days),
      };
      break;
    case "HEALTH":
      balanceUpdate = {
        healthUsed: (balance.healthUsed as number) + days,
        healthAvailable:
          (balance.healthCredit as number) -
          ((balance.healthUsed as number) + days),
      };
      break;
    case "MATERNITY":
      balanceUpdate = {
        maternityUsed: (balance.maternityUsed as number) + days,
        maternityAvailable:
          (balance.maternityCredit as number) -
          ((balance.maternityUsed as number) + days),
      };
      break;
    case "PATERNITY":
      balanceUpdate = {
        paternityUsed: (balance.paternityUsed as number) + days,
        paternityAvailable:
          (balance.paternityCredit as number) -
          ((balance.paternityUsed as number) + days),
      };
      break;
    case "STUDY":
      balanceUpdate = {
        studyUsed: (balance.studyUsed as number) + days,
        studyAvailable:
          (balance.studyCredit as number) -
          ((balance.studyUsed as number) + days),
      };
      break;
    case "UNPAID":
      balanceUpdate = {
        unpaidUsed: (balance.unpaidUsed as number) + days,
      };
      break;
    default:
      throw new Error(`Unsupported leave type: ${type}`);
  }

  await prisma.balances.update({
    where: { id: balance.id },
    data: balanceUpdate,
  });
}
