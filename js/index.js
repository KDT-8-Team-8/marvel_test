function start() {
  localStorage.clear();
  location.href = "../index/question1.html";
}
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", start);
