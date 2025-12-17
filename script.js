// 캐릭터 정보 저장
let character = {
  name: "",
  gender: "",
  personality: "",
  mbti: ""
};

// 화면 전환 함수
function startGame() {
  // 입력값 읽기
  character.name = document.getElementById("nameInput").value;
  character.gender = document.getElementById("genderInput").value;
  character.personality = document.getElementById("personalityInput").value;
  character.mbti = document.getElementById("mbtiInput").value;

  // 시작 화면 숨기기
  document.getElementById("startScreen").style.display = "none";

  // 게임 화면 보이기
  document.getElementById("gameScreen").style.display = "block";

  // 첫 장면 출력
  showScene();
}

// 첫 장면 예시
function showScene() {
  const story = document.getElementById("story");
  story.innerText = `안녕하세요, ${character.name}님!
선택한 성격: ${character.personality}, MBTI: ${character.mbti}.
부디 살아남으실 수 있기를...`;
}
