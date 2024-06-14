export function dateConverter(inputDateString) {
  const date = new Date(inputDateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  return formattedDate;
}
