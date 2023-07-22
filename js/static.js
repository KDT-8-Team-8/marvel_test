$(document).ready(function () {
  $("#header").load("../static/header.html");
  $("footer").load("../static/footer.html");
});
function go_back() {
  history.back();
  let num = localStorage.getItem("pagenumber");
  localStorage.setItem("pagenumber", Number(num) - 2);
  sessionStorage.clear();
}

/*
$(document).ready(): 문서가 준비되면 매개변수로 넣은 콜백 함수 실행

$().load(): 반환된 데이터를 매치된 요소의 HTML 콘텐츠로 설정
-> id가 header인 부분에 header.html을 적용시키고,
footer에 footer.html을 적용

*/
