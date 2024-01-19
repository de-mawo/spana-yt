import Container from "@/components/Common/Container"
import BalancesTable from "./BalancesTable"
import { getAllBalances } from "@/lib/data/getBalanceData";
import { Balances } from "@prisma/client";


export default async function AdminBalances  ()  {
  const allBalances = await getAllBalances();
  if (allBalances === null) {
    return <Container>No Balances found...</Container>;
  }
  return (
    <Container>
      <BalancesTable balances={allBalances as Balances[]}/>
    </Container>
  )
}

