var schedule = document.getElementsByClassName("todaySchedule")[0];

for (var i = 0; i < 14; i++) {
  var hour = document.createElement("div");

  if(i % 2 == 0) {
    hour.className = "hourSchedule isReserved"
  } else {
    hour.className = "hourSchedule";
  }
  hour.innerHTML = (8 + i) + "h00 - " + (9 + i) + "h00";
  schedule.appendChild(hour);
}
