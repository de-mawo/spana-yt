import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Events } from "@prisma/client";
  import { FaRegTrashCan } from "react-icons/fa6";
  
  type UserProps = {
    events: Events[];
  };
  
  const EventsTable = ({ events }: UserProps) => {
  
    return (
      <div className="  rounded-lg shadow-md px-6  max-h-[50vh] overflow-y-auto bg-white dark:bg-black">
        <div className="py-5 px-10 sticky top-0 z-10 shadow-md bg-white  dark:bg-slate-900">
            <h2 className="text-2xl text-center font-bold tracking-tight">
             Events
            </h2>
          </div>
  
        <div className="relative overflow-x-auto  "> 
        
       
        <Table>
          <TableHeader className="whitespace-nowrap">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Event Date</TableHead>
              <TableHead className="">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="whitespace-nowrap">
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.startDate.toLocaleDateString()}</TableCell>
                <TableCell className="">
                  <button>
                  <FaRegTrashCan size={18}  />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>
    );
  };
  
  export default EventsTable;
  