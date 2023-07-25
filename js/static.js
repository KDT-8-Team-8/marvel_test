$(document).ready(function () {
  const profileImageValue = localStorage.getItem("profileImage");
  if (profileImageValue) {
    $("#header").load("../static/header_login.html");
  } else {
    $("#header").load("../static/header_logout.html");
  }
  $("footer").load("../static/footer.html");
});
function go_back() {
  history.back();
  let num = localStorage.getItem("pagenumber");
  localStorage.setItem("pagenumber", Number(num) - 2);
  sessionStorage.clear();
}
