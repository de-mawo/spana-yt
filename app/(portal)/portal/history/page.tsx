import Container from "@/components/Common/Container";
import HistoryTable from "./HistoryTable";
import TableWrapper from "../../../../components/Common/TableWrapper";

import { Leave } from "@prisma/client";
import { getUserLeaveDays } from "@/lib/data/getLeaveDays";

const UserHistory = async () => {
  const leaveHistory = await getUserLeaveDays()

  if (leaveHistory === null) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      <TableWrapper title="My Leave History">
        <HistoryTable history={leaveHistory as  Leave[]} />
      </TableWrapper>
    </Container>
  );
};

export default UserHistory;