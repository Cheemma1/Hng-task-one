function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("currentTime");
  const currentDayElement = document.getElementById("currentDay");

  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; // Getting the time part from the UTC string
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getUTCDay()]; // Getting the current day in UTC

  currentTimeElement.textContent = utcTime;
  currentDayElement.textContent = currentDay;
}

// This Updates the time and day when the page loads
updateTimeAndDay();


setInterval(updateTimeAndDay, 60000); // 60000 milliseconds = 1 minute
