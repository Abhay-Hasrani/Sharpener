export function formatDate() {

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const daytime = (hours>12)?"PM":"AM";
    hours=hours%12;
    if(hours===0) hours=12;
    const weekDayIndex = date.getDay();
    const weekDayName = daysOfWeek[weekDayIndex];
    const formattedDate = `${hours}:${minutes} ${daytime} ${day}-${month}-${year} `;
    return formattedDate;
  }