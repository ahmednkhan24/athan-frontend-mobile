import { useState, useEffect } from 'react';
import moment from 'moment';
import { isTodayTomorrowOrYesterday } from '../utils';

export const useDate = () => {
  const [date, setDate] = useState(moment());
  const [formattedDate, setFormattedDate] = useState(date.toString());

  useEffect(() => {
    const isRecent = isTodayTomorrowOrYesterday(date);
    const [weekday, month, day, year] = date.toLocaleString().split(' ');
    setFormattedDate(`${isRecent}${weekday} ${month} ${day}, ${year}`);
  }, [date]);

  return { date, formattedDate };
};
