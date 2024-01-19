'use client'
import Container from '@/components/Common/Container';
import { daysOfTheWeek, getDays, months } from '@/lib/getDays';
import { cn } from '@/lib/utils';
import { Events } from '@prisma/client';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import EventPopOver from './EventPopOver';

type Props = {
  events: Events[]
}
const Calendar = ({events}: Props) => {
    const currentDate = dayjs()

    const [today, setToday] = useState(currentDate)
    


  return (
    <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center bg-blue-100 py-5 px-10 rounded-t-md  dark:bg-slate-900">
        <h1 className="select-none font-semibold">
          {months[today.month()]}, {today.year()}
        </h1>
        <div className="flex gap-10 items-center ">
          <IoMdArrowDropleft
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <h1
            className=" cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            Today
          </h1>
          <IoMdArrowDropright
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      <section className="bg-white py-5 rounded-b-md dark:border dark:bg-black">
      <div className="grid grid-cols-7">
          {daysOfTheWeek.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-10 font-bold grid place-content-center"
              >
                {day}
              </h1>
            );
          })}
        </div>
       
       <div className="grid grid-cols-7">
         {getDays(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
           const event = events?.find(event => dayjs(event.startDate).isSame(date, 'day'));
           return (
             <div key={index} className="h-10 grid place-content-center">
              {!event ?
                <h1 
                  className={cn(
                    !currentMonth && "text-slate-400",
                    today && "bg-blue-600 text-white ",
                    "h-8 w-8 p-1 grid place-content-center font rounded-full cursor-pointer hover:bg-black hover:text-white dark:hover:bg-slate-500"
                  )}
                >
                  {date.date()}{" "}
                </h1>
                : <EventPopOver event={event as Events} date={date.date()} />}
              
             </div>
           );
         })}
       </div>
     </section>
     

    </Container>
  )
}

export default Calendar