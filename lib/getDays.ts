
import dayjs from 'dayjs'


export const getDays = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");

  const dateArray = []

  // Get previous days

  for (let i = 0; i < firstDayOfMonth.day(); i++){
    dateArray.push({date: firstDayOfMonth.day(i), currentMonth: false})
  }

  // Get current month days 
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    const currentDate = firstDayOfMonth.date(i);
    dateArray.push({
      currentMonth: true,
      date: currentDate,
      today: currentDate.toDate().toDateString() === dayjs().toDate().toDateString(),
    });
  }

  // Get forward days
  const forwardDays = 42 - dateArray.length;
  for (let i = lastDayOfMonth.date() + 1; i <= lastDayOfMonth.date() + forwardDays; i++) {
    dateArray.push({ date: lastDayOfMonth.date(i), currentMonth: false });
  }

  return dateArray;
}


export const daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
