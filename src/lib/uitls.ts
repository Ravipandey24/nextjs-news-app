export function formatISODate(isoDateString: string) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 indexed so we add 1
  const day = ("0" + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}

export function getOneMonthAgo() {
  const today = new Date();
  const month = today.getMonth();
  today.setMonth(month - 1);
  return today
}

export function getOneWeekAgo() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
}

