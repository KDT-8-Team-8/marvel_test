function start() {
  localStorage.clear();
  location.href = "./question1.html";
}
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", start);
