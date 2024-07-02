import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    setYear(year.toString());
    setMonth(month);
    setDay(day);
  }, []);
  return { currentDate, year, month, day };
};
