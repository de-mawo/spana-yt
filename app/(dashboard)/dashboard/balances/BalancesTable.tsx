"use client";

import React from "react";
import TableWrapper from "@/components/Common/TableWrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Balances } from "@prisma/client";
import EditBalances from "./EditBalances";
import { Badge } from "@/components/ui/badge";

type BalanceRowType = {
  title: string;
  values: string[];
};

const BalanceRow = ({ title, values }: BalanceRowType) => (
  <TableHead className="text-center border-none">
    {title}
    <TableRow>
      {values.map((value, index) => (
        <TableHead key={index} className="border-none">
          {value}
        </TableHead>
      ))}
    </TableRow>
  </TableHead>
);

type BalanceProps = {
  balances: Balances[]
}

const BalancesTable = ({balances}: BalanceProps) => {


  const balanceCategories = [
    { title: "ANNUAL", values: ["Credit", "Used", "Available"] },
    { title: "FAMILY", values: ["Credit", "Used", "Available"] },
    { title: "HEALTH", values: ["Credit", "Used", "Available"] },
    { title: "MATERNITY", values: ["Credit", "Used", "Available"] },
    { title: "PATERNITY", values: ["Credit", "Used", "Available"] },
    { title: "STUDY", values: ["Credit", "Used", "Available"] },
    { title: "UNPAID", values: ["Used"] },
  ];

  const renderTableCells = (bal: CellTypes) => {
    const categories = [ 
      "annual",
      "family",
      "health",
      "maternity",
      "paternity",
      "study",
      "unpaid",
    ];

    return categories.map((category) => (
      <TableCell key={category}>
        <TableRow>
          {["Credit", "Used", "Available"].map((type, index) => (
            <TableCell key={index} className={`w-[100px]`}>
              {bal[`${category}${type}`]}
            </TableCell>
          ))}
        </TableRow>
      </TableCell>
    ));
  };

  return (
    <TableWrapper title="All User Balances">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Year</TableHead>
            {balanceCategories.map((category, index) => (
              <BalanceRow
                key={index}
                title={category.title}
                values={category.values}
              />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="whitespace-nowrap text-center">
          {balances?.map((bal) => (
            <TableRow key={bal.id}>
              <TableCell>
                <EditBalances balance={bal}/>
              </TableCell>
              <TableCell>{bal.name}</TableCell>
              <TableCell><Badge>{bal.year} </Badge> </TableCell>
              {renderTableCells(bal)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default BalancesTable;
