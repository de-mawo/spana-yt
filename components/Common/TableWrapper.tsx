import React from 'react'

type TableProps = {
    title: string;
    children: React.ReactNode;
  };
  
  const TableWrapper = ({ title, children }: TableProps) => {
    return (
      <div className="  rounded-lg shadow-md px-6 my-12 max-h-[80vh] overflow-y-auto bg-white dark:bg-black">
        <div className="py-5 px-10 sticky top-0 z-10 bg-white  dark:bg-slate-900">
            <h2 className="text-2xl text-center font-bold tracking-tight">
             {title}
            </h2>
          </div>
  
        <div className="relative overflow-x-auto  ">{children}</div>
      </div>
    );
  };
  
  export default TableWrapper;