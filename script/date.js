let currentDate = document.getElementById("current-date");
let today = new Date();
let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayName = weekdays[today.getDay()];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthName = months[today.getMonth()];
let day = today.getDate();
let year = today.getFullYear();

let div = document.createElement("div");
div.innerHTML = `<h1 class="text-[#00303C] text-[22px]">${dayName} ,<br><span class="font-bold">${monthName} ${day} ${year}</span></h1>`;
currentDate.appendChild(div);