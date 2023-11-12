const formatDate = (date) => {
  date = date.split('T')[0];
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  const dateObject = new Date(`${year}/${month}/${day}`);

  const dayName = Intl.DateTimeFormat('fa', {weekday: 'long'}).format(dateObject);
  const fullDate = Intl.DateTimeFormat('fa', {dateStyle: 'long'}).format(dateObject);

  return `${dayName} ${fullDate}`;
};

export default formatDate;
