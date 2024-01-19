import Container from "@/components/Common/Container"
import { MonthDateRangePicker } from "./MonthDateRangePicker"
import { Button } from "@/components/ui/button"
import StatsCards from "./StatsCards"


const Dashboard = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row py-6 items-center justify-between ">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <MonthDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <StatsCards />
    </Container>
  )
}

export default Dashboard