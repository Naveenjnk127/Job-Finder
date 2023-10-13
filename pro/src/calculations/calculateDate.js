export const calculateYearsMonthsDays = (date) => {
  const present = new Date();

  const timeDifference = present.getTime() - date.getTime();
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor(timeDifference / millisecondsInDay);
  const year = Math.floor(daysDifference / 365);
  const month = Math.floor((daysDifference % 365) / 30);
  const day = daysDifference % 30;

  return year === 0 && year === 0 && day === 0
    ? "today"
    : (year > 0 ? year + " years " : "") +
        (month > 0 ? month + " months " : "") +
        (day > 0 ? day + " day(s)" : "") +
        " ago";
};
export const DateFilter = (posteddate, filter) => {
  var postedDate = new Date(posteddate + " ");
  var timeDiff;
  var hoursDiff;
  var daysDiff;
  var currentDate = new Date();
  switch (filter) {
    case "Last 24 hours":
      timeDiff = currentDate - postedDate;
      hoursDiff = timeDiff / (1000 * 60 * 60);
      return hoursDiff <= 24;
    case "Last 48 hours":
      timeDiff = currentDate - postedDate;
      hoursDiff = timeDiff / (1000 * 60 * 60);
      return hoursDiff <= 48;
    case "Last Month":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff <= 30;
    case "Last 7 days":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff <= 7;
    case "Last 14 days":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff <= 14;
    default:
      return false;
  }
};
