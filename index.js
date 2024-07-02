function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("currentTime");
  const currentDayElement = document.getElementById("currentDay");

  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  // Converting 24-hour format to 12-hour format
  const hours = utcHours % 12 || 12;
  const minutes = utcMinutes.toString().padStart(2, "0");
  const seconds = utcSeconds.toString().padStart(2, "0");
  const ampm = utcHours >= 12 ? "PM" : "AM";

  const utcTime = `${hours}:${minutes}:${seconds} ${ampm}`;

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
