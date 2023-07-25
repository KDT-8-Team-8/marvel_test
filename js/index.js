function start() {
  //로그인이 되어 있으면 닉네임이랑 아이디는 그대로 저장
  const nickname = localStorage.getItem("nickname");
  const id = localStorage.getItem("id");
  const profileImage = localStorage.getItem("profileImage");
  localStorage.clear();
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("id", id);
  localStorage.setItem("profileImage", profileImage);
  location.href = "../index/question1.html";
}
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", start);

// //URL에서 액세스 토큰 추출 함수
// function getAccessTokenFromURL() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get("access_token");
// }

// //액세스 토큰을 이용하여 사용자 정보 얻는 함수
// function getUsetInfo(accessToken) {
//   Kakao.API.request({
//     url: "/v2/user/me",
//     headers: { Authorization: `Bearer ${accessToken}` },
//     success: function (response) {
//       // 사용자 정보(response)를 이용한 로그인 후 처리
//       // 예를 들면 서버에 액세스 토큰을 보내 인증하거나, 로그인 성공 후 다른 페이지로 이동 등의 처리를 할 수 있습니다.
//       console.log("사용자 정보", response);
//     },
//     fail: function (error) {
//       console.error("사용자 정보 요청 실패", error);
//     },
//   });
// }
