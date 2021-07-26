import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { isTodayTomorrowOrYesterday } from '../utils';

export const useDate = () => {
  const [date, setDate] = useState(moment());
  const [formattedDate, setFormattedDate] = useState(date.toString());

  const addOneDay = useCallback(() => {
    setDate(moment(date).add(1, 'day'));
  }, [date]);

  const subtractOneDay = useCallback(() => {
    setDate(moment(date).subtract(1, 'day'));
  }, [date]);

  useEffect(() => {
    const isRecent = isTodayTomorrowOrYesterday(date);
    const [weekday, month, day, year] = date.toLocaleString().split(' ');
    setFormattedDate(`${isRecent}${weekday} ${month} ${day}, ${year}`);
  }, [date]);

  return { date, addOneDay, subtractOneDay, formattedDate };
};
