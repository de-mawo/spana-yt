import Container from "@/components/Common/Container";
import LeavesTable from "./LeavesTable";
import TableWrapper from "@/components/Common/TableWrapper";
import { getAllLeaveDays } from "@/lib/data/getLeaveDays";
import { Leave } from "@prisma/client";

export default async function  AdminLeaves()  {
  const allLeaves = await getAllLeaveDays();
  if (allLeaves === null) {
    return <Container>No Leaves found...</Container>;
  }

  return (
    <Container>
      <TableWrapper title="All Leaves">
        <LeavesTable leaves={allLeaves as Leave[]} />
      </TableWrapper>
    </Container>
  );
};