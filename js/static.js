$(document).ready(function () {
  $("#header").load("../static/header.html");
  $("footer").load("../static/footer.html");
});
function go_back() {
  history.back();
  let num = localStorage.getItem("pagenumber");
  localStorage.setItem("pagenumber", Number(num) - 2);
}
