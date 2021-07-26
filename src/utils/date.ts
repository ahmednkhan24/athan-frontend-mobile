import moment, { Moment } from 'moment';

const REFERENCE = moment();
const TODAY = REFERENCE.clone().startOf('day');
const YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
const TOMORROW = REFERENCE.clone().add(1, 'days').startOf('day');

export const isToday = (date: Moment) => date.isSame(TODAY, 'd');

export const isYesterday = (date: Moment) => date.isSame(YESTERDAY, 'd');

export const isTomorrow = (date: Moment) => date.isSame(TOMORROW, 'd');

export const isTodayTomorrowOrYesterday = (date: Moment) => {
  if (isToday(date)) {
    return 'Today, ';
  } else if (isYesterday(date)) {
    return 'Yesterday, ';
  } else if (isTomorrow(date)) {
    return 'Tomorrow, ';
  }
  return '';
};
