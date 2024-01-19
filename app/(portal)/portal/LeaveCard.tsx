"use client";
import { Card, CardContent } from "@/components/ui/card";

type LeaveCardProps = {
  year: string;
  leaveType: string;
  credit?: number;
  used: number;
  balance?: number;
};

const LeaveCard = ({
  year,
  leaveType,
  credit,
  used,
  balance,
}: LeaveCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col p-3 space-y-2 ">
        <div className="flex items-center justify-between p-2  bg-blue-50  rounded-md font-semibold  dark:bg-slate-900 ">
          <h4>{year}</h4>
          <h4>{leaveType}</h4>
        </div>
        <div className="flex items-center justify-between ">
          <h4>Credit</h4>
          <h4>{credit}</h4>
        </div>
        <div className="flex items-center justify-between ">
          <h4>Used</h4>
          <h4>{used}</h4>
        </div>

        <div className="flex items-center justify-between ">
          <h4>Remaining</h4>
          <h4>{balance}</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaveCard;
