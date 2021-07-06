////////////////////////////////////////////////////////////////
//validate input
const checkingInput = (city, feelings, date1, date2) => {
  if (
    city.length === 0 ||
    feelings.length === 0 ||
    date1 == "" ||
    date2 == ""
  ) {
    alert("Please fill up all values !");
    return "hello";
  }
  return "hello";
};

export { checkingInput };
