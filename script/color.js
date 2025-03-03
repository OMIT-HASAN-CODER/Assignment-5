let colorBtn = document.getElementById("color-btn");
let body = document.body;
let colors = ["#FAD2E1", "#D4E2D4", "#BFD7ED", "#FFF2CC", "#FCE8D5", "#FFC3A0", "#E0BBE4", "#FBEEC1", "#FFABAB", "#A0E7E5"];

colorBtn.addEventListener("click", function(){
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})