// 답안 배열로 바꾸는 함수
function make_arr() {
  let resArr = [];
  // 유저가 답한 I,E,N,S,T,F,J,P 배열에 추가
  for (let i = 1; i <= 20; i++) {
    let res = localStorage.getItem(`answer${i}`);
    resArr.push(res);
  }

  let IE_res = 0;
  let NS_res = 0;
  let TF_res = 0;
  let JP_res = 0;
  // 유저 답안 배열 검사해 숫자 설정
  for (let i = 0; i <= 20; i++) {
    if (resArr[i] === "I") {
      IE_res += 1;
    } else if (resArr[i] === "N") {
      NS_res += 1;
    } else if (resArr[i] === "T") {
      TF_res += 1;
    } else if (resArr[i] === "J") {
      JP_res += 1;
    }
  }
  // 설정한 숫자 배열로 만들기
  let mbtiArr = [IE_res, NS_res, TF_res, JP_res];
  return mbtiArr;
}

// MBTI 추출 함수
function MBTI(ans) {
  // ans에는 [0,1,3,0]등의 배열이 들어감
  // 질문 수
  let IE_question = 5;
  let NS_question = 5;
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

  for (let i = 0; i <= 3; i++) {
    if (res_arr[i] > 0.5) {
      MBTIres += mbti_arr[2 * i];
    } else {
      MBTIres += mbti_arr[2 * i + 1];
    }
  }
  return MBTIres;
}
// 캐릭터 추출 함수
function check_char(ans) {
  // ans에는 INTJ,ENFP 등의 MBTI 문자열이 들어감
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

// 사진 반영 함수
function result(char) {
  var storedChar = sessionStorage.getItem("charValue"); //로컬 스토리지에 저장된 charValue 값을 가져온다.
  var charValueFirst = sessionStorage.getItem("charValueFirst");
  var char = storedChar ? storedChar : charValueFirst;
  //삼항 연산자를 사용하여 storedChar의 있으면 storedChar의 값을 사용하고 없으면 "dr_strange"(이부분을 설문조사 결과값으로 받아오면 된다.)사용.

  let imgElement = document.querySelector(".img");
  let heroNameElement = document.getElementById("heroName");
  let resultMBTIElement = document.getElementById("resultMBTI");
  let explainElement = document.getElementById("explain");
  let bestMatchElement = document.getElementById("bestMatch");
  let worstMatchElement = document.getElementById("worstMatch");
  let bestMatchImgElement = document.querySelector(".bestMatchImg");
  let worstMatchImgElement = document.querySelector(".worstMatchImg");

  if (char === "dr_strange") {
    imgElement.src = "/image/dr_strange.jpg";
    imgElement.alt = "dr_strange";
    heroNameElement.textContent = "닥터 스트레인지";
    resultMBTIElement.textContent = "INTJ";
    explainElement.textContent =
      "행동과 사고에 있어 독창적입니다. 내적인 신념과 비전은 산이라도 움직일 만큼 강합니다. 16가지 유형 중에서 가장 독립적이고 단호합니다. 때때로 어떤 문제에 대하여 아주 고집에 셉니다. 자신이 가진 영감과 목적을 실현시키려는 의지와 결단력과 인내심을 가지고 있습니다. 자신과 타인의 능력을 중요시하며, 목적달성을 위하여 온 시간과 노력을 다 바쳐 일합니다. 직관력과 통찰력이 활용되는 분야에서 능력을 발휘하는 편입니다.";

    bestMatchElement.textContent = "스파이더맨";
    bestMatchImgElement.src = "/image/SpiderMan.jpg";
    bestMatchImgElement.alt = "spider_man";

    worstMatchElement.textContent = "캡틴 아메리카";
    worstMatchImgElement.src = "/image/CaptainAmerica.jpg";
    worstMatchImgElement.alt = "cpt_america";
  } else if (char === "hulk") {
    imgElement.src = "/image/Hulk.jpg";
    imgElement.alt = "hulk";
    heroNameElement.textContent = "헐크";
    resultMBTIElement.textContent = "INTP";
    explainElement.textContent =
      "조용하고 과묵하나 관심이 있는 분야에 대해서는 말을 잘합니다. 사람들을 중심으로 한 가치보다는 아이디어에 관심이 많으며 매우 분석적이고 논리적이며 객관적 비평을 잘합니다. 일의 원리와 아이디어에 관심이 많으며, 실체보다는 실체가 안고 있는 가능성에 관심이 많습니다. 이해가 빠르고 높은 직관력으로 통찰하는 재능과 지적 관심이 많습니다. 개인적인 인간관계나 파티 혹은 잡담 등에는 흥미가 별로 없습니다. 사람을 사귀는 데 있어서 그들은 보통 아이디어를 토론하고 나누는 소수의 가까운 사람들을 주위에 두고 있습니다. 때로 어떤 아이디어에 몰입하여 주위에서 돌아가고 있는 일을 모를 때가 많습니다.";

    bestMatchElement.textContent = "타노스";
    bestMatchImgElement.src = "/image/Thanos.jpg";
    bestMatchImgElement.alt = "thanos";

    worstMatchElement.textContent = "앤트맨";
    worstMatchImgElement.src = "/image/AntMan.jpg";
    worstMatchImgElement.alt = "ant_man";
  } else if (char === "thanos") {
    imgElement.src = "/image/Thanos.jpg";
    imgElement.alt = "thanos";
    heroNameElement.textContent = "타노스";
    resultMBTIElement.textContent = "ENTJ";
    explainElement.textContent =
      "활동적이며 행정적인 일과 장기계획을 선호하며 논리적이고 분석적입니다. 사전 준비를 철저히 하며 계획하고 조직하고 체계적으로 목적달성을 추진시키는 지도자들이 많습니다. 비능률적이거나 확실치 않는 상황에 대해서는 별로 인내심이 없습니다. 그러나 상황이 필요로 할 때는 강하게 대처합니다. 솔직하고 결정력과 통솔력이 있으며, 거시적 안목으로 일을 밀고 나갑니다. 관념 자체에 집중하는 경향이 있으며, 관념 이면의 사람에게는 관심이 별로 없습니다.";

    bestMatchElement.textContent = "헐크";
    bestMatchImgElement.src = "/image/Hulk.jpg";
    bestMatchImgElement.alt = "hulk";

    worstMatchElement.textContent = "캡틴 마블";
    worstMatchImgElement.src = "/image/CaptainMarvel.jpg";
    worstMatchImgElement.alt = "cpt_marvel";
  } else if (char === "iron_man") {
    imgElement.src = "/image/IronMan.jpg";
    imgElement.alt = "iron_man";
    heroNameElement.textContent = "아이언맨";
    resultMBTIElement.textContent = "ENTP";
    explainElement.textContent =
      "창의력이 풍부하고 항상 새로운 가능성을 찾고 새로운 시도를 즐기는 유형입니다. 넓은 안목을 가지고 있으며 다방면에 재능이 있습니다. 풍부한 상상력과 어떤 프로젝트를 시도하는 솔선력이 강합니다. 민첩하고 여러 가지 일에 재능을 발휘하며 자신감이 넘쳐 납니다. 사람들의 동향에 대해 기민하고 박식한 편입니다. 다른 사람을 판단하기보다 이해하려고 노력합니다.";

    bestMatchElement.textContent = "비전";
    bestMatchImgElement.src = "/image/Vision.jpg";
    bestMatchImgElement.alt = "vision";

    worstMatchElement.textContent = "호크아이";
    worstMatchImgElement.src = "/image/HawkEye.png";
    worstMatchImgElement.alt = "hawk_eye";
  } else if (char === "vision") {
    imgElement.src = "/image/Vision.jpg";
    imgElement.alt = "vision";
    heroNameElement.textContent = "비전";
    resultMBTIElement.textContent = "INFJ";
    explainElement.textContent =
      "창의력과 통찰력이 뛰어납니다. 강한 직관력으로 의미와 진실된 관계를 추구합니다. 뛰어난 영감으로 말없이 타인에게 영향력을 끼칩니다. 독창성과 사적인 독립심이 강합니다. 또한 확고한 신념과 뚜렷한 원리원칙을 생활 속에 가지고 있으면서 공동의 이익을 가져오는 일에 심혈을 기울입니다. 인화와 동료애를 중시하는 경향으로 존경을 받고 사람들이 따릅니다. 열정과 신념으로 자신들이 믿는 영감을 구현 시켜 나갈 때 위대한 정신적 지도자들이 이 유형에서 많이 나옵니다. 남에게 강요하기보다 행동과 권유로 사람들의 마음을 움직여 따르게 만드는 지도력이 있습니다.";

    bestMatchElement.textContent = "아이언맨";
    bestMatchImgElement.src = "/image/IronMan.jpg";
    bestMatchImgElement.alt = "iron_man";

    worstMatchElement.textContent = "블랙팬서";
    worstMatchImgElement.src = "/image/BlackPanther.jpg";
    worstMatchImgElement.alt = "black_panther";
  } else if (char === "witch") {
    imgElement.src = "/image/ScarletWitch.jpg";
    imgElement.alt = "witch";
    heroNameElement.textContent = "스칼렛위치";
    resultMBTIElement.textContent = "INFP";
    explainElement.textContent =
      "마음이 따뜻하나, 상대방을 잘 알기 전에는 표현을 잘하지 않습니다. 조용하며, 자신이 관계하는 사람이나 일에 대하여 강하고 성실합니다. 또한 자신이 지향하는 이상에 대하여는 정열적인 신념을 지니고 있습니다.";

    bestMatchElement.textContent = "로키";
    bestMatchImgElement.src = "/image/Roki.jpg";
    bestMatchImgElement.alt = "roki";

    worstMatchElement.textContent = "토르";
    worstMatchImgElement.src = "/image/Thor.jpg";
    worstMatchImgElement.alt = "thor";
  } else if (char === "roki") {
    imgElement.src = "/image/Roki.jpg";
    imgElement.alt = "roki";
    heroNameElement.textContent = "로키";
    resultMBTIElement.textContent = "ENFJ";
    explainElement.textContent =
      "동정심과 동료애가 많으며, 친절하고 재치 있습니다. 민첩하고 참을성이 많고 성실합니다. 사람들과의 인화를 중요시 여기며, 다른 사람들의 의견을 존중하고 그 가치를 봅니다. 공동의 선(善)을 위해서는 대체로 상대방 의견에 동의하는 경향이 있습니다. 새로운 아이디어에 대한 호기심이 많습니다. 쓰기 보다는 말로써 생각을 잘 표현합니다. 편안하고 능란하게 계획을 제시하거나 조직을 이끌어 가는 능력이 있습니다.";

    bestMatchElement.textContent = "스칼렛위치";
    bestMatchImgElement.src = "/image/ScarletWitch.jpg";
    bestMatchImgElement.alt = "witch";

    worstMatchElement.textContent = "블랙위도우";
    worstMatchImgElement.src = "/image/BlackWidow.jpg";
    worstMatchImgElement.alt = "black_widow";
  } else if (char === "spider_man") {
    imgElement.src = "/image/SpiderMan.jpg";
    imgElement.alt = "spider_man";
    heroNameElement.textContent = "스파이더맨";
    resultMBTIElement.textContent = "ENFP";
    explainElement.textContent =
      "열성적이고 창의적입니다. 풍부한 상상력과 영감을 가지고 새로운 프로젝트를 잘 시작합니다. 풍부한 충동적 에너지를 가지고 즉흥적으로 일을 재빠르게 해결하는 솔선수범력과 상상력이 있습니다. 관심이 있는 일이면 무엇이든 척척 해내는 열성파입니다. 뛰어난 통찰력으로 그 사람 안에 있는 성장 발전할 가능성을 들여다봅니다. 또한 자신의 열성으로 다른 사람들도 어떤 프로젝트에 흥미를 가지게 하고 다른 사람을 잘 도와줍니다.";

    bestMatchElement.textContent = "닥터 스트레인지";
    bestMatchImgElement.src = "/image/dr_strange.jpg";
    bestMatchImgElement.alt = "dr_strange";

    worstMatchElement.textContent = "스타로드";
    worstMatchImgElement.src = "/image/StarLord.jpg";
    worstMatchImgElement.alt = "star_load";
  } else if (char === "hawk_eye") {
    imgElement.src = "/image/HawkEye.png";
    imgElement.alt = "hawk_eye";
    heroNameElement.textContent = "호크아이";
    resultMBTIElement.textContent = "ISTJ";
    explainElement.textContent =
      "매우 신뢰성이 있고, 사실에 대한 완전하고, 현실적이고, 실용적인 면을 가지고 있습니다. 어떠한 분량의 사실이라도 몰두하고, 기억하며, 이용하고, 정확도에 대해 매우 세심합니다. 위기상황에 대처할 때에도 차분하며 안정되어 있습니다. 그들이 어떤 사람인가를 아는 데는 상당한 시간이 걸립니다. 그들은 외면적으로 볼 때 차분하게 보이지만, 내면적으로는 상당히 바쁩니다.";

    bestMatchElement.textContent = "토르";
    bestMatchImgElement.src = "/image/Thor.jpg";
    bestMatchImgElement.alt = "thor";

    worstMatchElement.textContent = "아이언맨";
    worstMatchImgElement.src = "/image/IronMan.jpg";
    worstMatchImgElement.alt = "iron_man";
  } else if (char === "cpt_america") {
    imgElement.src = "/image/CaptainAmerica.jpg";
    imgElement.alt = "cpt_america";
    heroNameElement.textContent = "캡틴 아메리카";
    resultMBTIElement.textContent = "ISFJ";
    explainElement.textContent =
      "책임감이 강하고 온정적이며 헌신적입니다. 세부적이고 치밀성과 반복을 요하는 일을 끝까지 해 나가는 인내력이 높습니다. 이들이 가진 침착성과 인내력은 가정이나 집단에 안정성을 가져다줍니다. 다른 사람의 사정을 고려하며 자신과 타인의 감정의 흐름에 민감합니다. 일처리에 있어 현실감각을 가지고 실제적이고 조직적으로 이행합니다. 경험을 통해서 자신이 틀렸다고 인정하기까지 어떠한 난관이 있어도 꾸준히 밀고 나가는 유형입니다. 온순하고 차분합니다.";

    bestMatchElement.textContent = "스타로드";
    bestMatchImgElement.src = "/image/StarLord.jpg";
    bestMatchImgElement.alt = "star_load";

    worstMatchElement.textContent = "닥터 스트레인지";
    worstMatchImgElement.src = "/image/dr_strange.jpg";
    worstMatchImgElement.alt = "dr_strange";
  } else if (char === "cpt_marvel") {
    imgElement.src = "/image/CaptainMarvel.jpg";
    imgElement.alt = "cpt_marvel";
    heroNameElement.textContent = "캡틴 마블";
    resultMBTIElement.textContent = "ESTJ";
    explainElement.textContent =
      "일을 조직하고 프로젝트를 계획하고 출범시키는 능력이 뛰어납니다. 현실적이고 사실적이며 체계적, 논리적으로 사업이나 조직체를 이끌어가는 타고난 재능을 가졌기 때문입니다. 혼돈스러운 상태나 불분명한 상태 또는 실용성이 없는 분야에는 큰 흥미가 없습니다. 그러나 필요시에는 언제나 응용하는 힘이 있습니다. 분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진하고 완성해 나갑니다. 어떤 계획이나 결정을 내릴 때 확고한 사실에 바탕을 두고 이행합니다. 대체로 결과를 현재 볼 수 있는 일을 즐기는 편입니다.";

    bestMatchElement.textContent = "블랙팬서";
    bestMatchImgElement.src = "/image/BlackPanther.jpg";
    bestMatchImgElement.alt = "black_panther";

    worstMatchElement.textContent = "타노스";
    worstMatchImgElement.src = "/image/Thanos.jpg";
    worstMatchImgElement.alt = "thanos";
  } else if (char === "ant_man") {
    imgElement.src = "/image/AntMan.jpg";
    imgElement.alt = "ant_man";
    heroNameElement.textContent = "앤트맨";
    resultMBTIElement.textContent = "ESFJ";
    explainElement.textContent =
      "동정심과 동료애가 많습니다. 친절하고 재치가 있으며, 다른 사람들에게 관심을 쏟고 인화를 도모하는 일을 중요하게 여깁니다. 양심적이고 정리정돈을 잘합니다. 참을성이 많고 다른 사람들을 잘 돕습니다. 또한 다른 사람들의 지지를 받으면 일에 열중합니다. 그러나 다른 사람들의 무관심한 태도에는 민감합니다.";

    bestMatchElement.textContent = "블랙위도우";
    bestMatchImgElement.src = "/image/BlackWidow.jpg";
    bestMatchImgElement.alt = "black_widow";

    worstMatchElement.textContent = "헐크";
    worstMatchImgElement.src = "/image/Hulk.jpg";
    worstMatchImgElement.alt = "hulk";
  } else if (char === "black_widow") {
    imgElement.src = "/image/BlackWidow.jpg";
    imgElement.alt = "black_widow";
    heroNameElement.textContent = "블랙위도우";
    resultMBTIElement.textContent = "ISTP";
    explainElement.textContent =
      "조용하고 말이 없으며 논리적이고 분석적이고 객관적으로 인생을 관찰하는 유형입니다. 사실적인 정보를 조직하기 좋아하는 반면 일과 관계 되지 않는 이상 자신을 개방하지 않는 편입니다. 그래서 가까운 친구들 외에는 대체로 사람들과 사귀지 않는 편입니다. 일상생활에 있어 매우 적응력이 강합니다.";

    bestMatchElement.textContent = "앤트맨";
    bestMatchImgElement.src = "/image/AntMan.jpg";
    bestMatchImgElement.alt = "ant_man";

    worstMatchElement.textContent = "로키";
    worstMatchImgElement.src = "/image/Roki.jpg";
    worstMatchImgElement.alt = "roki";
  } else if (char === "black_panther") {
    imgElement.src = "/image/BlackPanther.jpg";
    imgElement.alt = "black_panther";
    heroNameElement.textContent = "블랙팬서";
    resultMBTIElement.textContent = "ISFP";
    explainElement.textContent =
      "말보다는 행동으로 따뜻함을 나타내며, 마음이 따뜻하고 동정적입니다. 마치 양털안감을 넣은 오버코트처럼 속마음이 따뜻한 사람들입니다. 그러나 상대방을 잘 알게 될 때까지 이 따뜻함을 잘 드러내지 않는 경향이 있습니다.";

    bestMatchElement.textContent = "캡틴 마블";
    bestMatchImgElement.src = "/image/CaptainMarvel.jpg";
    bestMatchImgElement.alt = "cpt_marvel";

    worstMatchElement.textContent = "비전";
    worstMatchImgElement.src = "/image/Vision.jpg";
    worstMatchImgElement.alt = "vision";
  } else if (char === "star_load") {
    imgElement.src = "/image/StarLord.jpg";
    imgElement.alt = "star_load";
    heroNameElement.textContent = "스타로드";
    resultMBTIElement.textContent = "ESTP";
    explainElement.textContent =
      "관대하고 느긋하며 어떤 사람이나 사건에 대해서 별로 선입관을 갖지 않으며 개방적입니다. 자신에게나 타인에게 있어 관용적이며, 일을 있는 그대로 보고 받아들입니다. 그래서 갈등이나 긴장이 일어나는 상황을 잘 무마하는 능력이 있습니다. ‘꼭 이렇게 되어야 하고, 저렇게 되어야 된다.’라는 규범을 적용하기보다 누구나 만족할 수 있는 해결책을 모색합니다. 또한 타협하고 적응하는 능력이 있습니다. 주의집중을 현재 상황에 맞추고, 현실을 있는 그대로 보는 이 유형의 자연스러운 경향으로 인해 현실적으로 야기되는 문제 해결에 뛰어난 능력을 발휘하기도 합니다.";

    bestMatchElement.textContent = "캡틴 아메리카";
    bestMatchImgElement.src = "/image/CaptainAmerica.jpg";
    bestMatchImgElement.alt = "cpt_america";

    worstMatchElement.textContent = "스파이더맨";
    worstMatchImgElement.src = "/image/SpiderMan.jpg";
    worstMatchImgElement.alt = "spider_man";
  } else if (char === "thor") {
    imgElement.src = "/image/Thor.jpg";
    imgElement.alt = "thor";
    heroNameElement.textContent = "토르";
    resultMBTIElement.textContent = "ESFP";
    explainElement.textContent =
      "친절하고 수용적이며 현실적이고 실제적입니다. 어떤 상황에도 잘 적응하며 타협적입니다. 선입견이 별로 없으며 개방적이고 관용적이며 대체로 사람들을 잘 받아들입니다. 주위에서 진행되고 있는 일들을 알고자 하고 또한 열심히 참견하고 끼어들곤 합니다. 다른 사람의 일이나 활동에 관심이 많으며 새로운 사건 혹은 물건에도 관심과 호기심이 많기 때문입니다. 이론이나 책을 통해 배우기보다 경험 등의 실생활을 통해 배우는 것을 선호합니다.";

    bestMatchElement.textContent = "호크아이";
    bestMatchImgElement.src = "/image/HawkEye.png";
    bestMatchImgElement.alt = "hawk_eye";

    worstMatchElement.textContent = "스칼렛위치";
    worstMatchImgElement.src = "/image/ScarletWitch.jpg";
    worstMatchImgElement.alt = "witch";
  }
}

function onClick(imageId) {
  var char = "";
  if (imageId === "bestMatchImg") {
    char = document.querySelector(".bestMatchImg").alt;
  } else if (imageId === "worstMatchImg") {
    char = document.querySelector(".worstMatchImg").alt;
  }
  result(char);
  sessionStorage.setItem("charValue", char); //세션 스토리지에 char값 저장
  location.reload(); //현재 페이지 새로고침
}
