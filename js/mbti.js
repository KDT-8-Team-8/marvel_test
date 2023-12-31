function MBTI(ans) {
  // 질문 수
  let IE_question = 5;
  let NS_question = 3;
  let TF_question = 5;
  let JP_question = 5;
  // 결과 값 넣을 변수
  let MBTIres = "";
  // 문제 수로 나눠 몇% 체크했는지 확인
  let IE_res = ans[0] / IE_question;
  let NS_res = ans[1] / NS_question;
  let TF_res = ans[2] / TF_question;
  let JP_res = ans[3] / JP_question;
  let res_arr = [IE_res, NS_res, TF_res, JP_res];
  // 결과 값에 넣을 MBTI 배열로 활용
  let mbti_arr = ["I", "E", "N", "S", "T", "F", "J", "P"];

  for (let i = 0; i < 4; i++) {
    if (res_arr[i] > 0.5) {
      MBTIres += mbti_arr[2 * i];
    } else {
      MBTIres += mbti_arr[2 * i + 1];
    }
  }
  return MBTIres;
}

function check_char(ans) {
  let char_arr = [
    "dr_strange", // INTJ
    "hulk", // INTP
    "thanos", // ENTJ
    "iron_man", // ENTP
    "vision", // INFJ
    "witch", // INFP
    "roki", // ENFJ
    "spider_man", // ENFP
    "hawk_eye", // ISTJ
    "cpt_america", // ISFJ
    "cpt_marvel", // ESTJ
    "ant_man", // ESFJ
    "black_widow", // ISTP
    "black_panther", // ISFP
    "star_load", // ESTP
    "thor", // ESFP
  ];
  let mbti_res = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ];
  for (let i = 0; i < 16; i++) {
    if (ans == mbti_res[i]) {
      // 캐릭터와 mbti 매칭
      return char_arr[i];
    }
  }
}
