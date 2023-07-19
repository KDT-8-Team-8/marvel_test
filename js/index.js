function start() {
  var startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", function () {
    localStorage.clear();
    location.href = "./question1.html";
  });
}
