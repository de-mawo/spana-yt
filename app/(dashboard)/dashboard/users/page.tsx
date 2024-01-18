import Container from '@/components/Common/Container'
import TableWrapper from '@/components/Common/TableWrapper'
import UsersTable from './UsersTable'
import { getAllUsers } from '@/lib/data/getUserData'



export default async function AdminUsersPage ()  {
  const users = await getAllUsers()
 
  return (
    <Container>
        <TableWrapper title='Admin Users'>
        <UsersTable users={users} />
        </TableWrapper>
    </Container>
  )
}
