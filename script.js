const questions = [
  {
    text: "Trong văn bản hành chính, nguyên tắc nào yêu cầu dùng từ trung tính, phù hợp phong cách hành chính?",
    answers: [
      "Đúng nội dung",
      "Đúng văn phong",
      "Đúng chính tả",
      "Đúng kết hợp"
    ],
    correct: 1,
    category: "style",
    point: 10
  },
  {
    text: "Câu nào phù hợp hơn với văn phong hành chính?",
    answers: [
      "Mình sẽ xử lý việc này sớm nha.",
      "Cơ quan chúng tôi sẽ xem xét và xử lý nội dung này trong thời gian phù hợp.",
      "Việc này chắc là làm được đó.",
      "Bạn cứ gửi qua rồi tính tiếp."
    ],
    correct: 1,
    category: "objective",
    point: 10
  },
  {
    text: "Nguyên tắc 'ngắn gọn – chính xác' yêu cầu điều gì?",
    answers: [
      "Viết càng dài càng tốt",
      "Dùng nhiều từ hoa mỹ",
      "Diễn đạt rõ ý, tránh rườm rà",
      "Dùng nhiều từ cảm xúc"
    ],
    correct: 2,
    category: "concise",
    point: 15
  },
  {
    text: "Từ nào nên tránh trong văn bản hành chính?",
    answers: [
      "Đề nghị",
      "Căn cứ",
      "Rất là tuyệt vời",
      "Thông báo"
    ],
    correct: 2,
    category: "public",
    point: 20
  },
  {
    text: "Câu nào có cấu trúc phù hợp hơn?",
    answers: [
      "Vì lý do đó nên cơ quan đã thực hiện việc tiến hành xử lý.",
      "Cơ quan đã xử lý việc này vì lý do nêu trên.",
      "Do đó cho nên là cơ quan đã xử lý.",
      "Việc xử lý được làm bởi cơ quan đó."
    ],
    correct: 1,
    category: "syntax",
    point: 10
  },
  {
    text: "Khi sửa một văn bản hành chính, người soạn thảo cần ưu tiên điều gì?",
    answers: [
      "Làm văn bản dài hơn",
      "Thêm nhiều từ biểu cảm",
      "Bảo đảm đúng nội dung, văn phong, chính tả và cấu trúc",
      "Dùng càng nhiều thuật ngữ càng tốt"
    ],
    correct: 2,
    category: "overall",
    point: 25
  }
];

let currentQuestion = 0;
let totalScore = 0;

const categoryScores = {
  objective: 0,
  concise: 0,
  style: 0,
  public: 0,
  syntax: 0,
  overall: 0
};

const questionCounter = document.getElementById("questionCounter");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answerBox = document.getElementById("answerBox");
const nextBtn = document.getElementById("nextBtn");

const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = questions[currentQuestion];

  questionCounter.textContent = `Câu hỏi ${currentQuestion + 1}/${questions.length}`;
  scoreText.textContent = `Điểm: ${totalScore}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  questionText.textContent = q.text;
  answerBox.innerHTML = "";
  nextBtn.disabled = true;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;

    button.addEventListener("click", () => selectAnswer(button, index));

    answerBox.appendChild(button);
  });
}

function selectAnswer(button, index) {
  const q = questions[currentQuestion];
  const answerButtons = document.querySelectorAll(".answer");

  answerButtons.forEach(btn => {
    btn.disabled = true;
  });

  if (index === q.correct) {
    button.classList.add("selected");
    totalScore += q.point;
    categoryScores[q.category] += q.point;
  } else {
    button.classList.add("wrong");
    answerButtons[q.correct].classList.add("selected");
  }

  scoreText.textContent = `Điểm: ${totalScore}`;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScore.textContent = totalScore;

  if (totalScore >= 75) {
    resultMessage.textContent = "Rất tốt";
  } else if (totalScore >= 50) {
    resultMessage.textContent = "Khá tốt";
  } else {
    resultMessage.textContent = "Cần thực hành thêm";
  }

  document.getElementById("score1").textContent = `${categoryScores.objective}/10 điểm`;
  document.getElementById("score2").textContent = `${categoryScores.concise}/15 điểm`;
  document.getElementById("score3").textContent = `${categoryScores.style}/10 điểm`;
  document.getElementById("score4").textContent = `${categoryScores.public}/20 điểm`;
  document.getElementById("score5").textContent = `${categoryScores.syntax}/10 điểm`;
  document.getElementById("score6").textContent = `${categoryScores.overall}/25 điểm`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  totalScore = 0;

  categoryScores.objective = 0;
  categoryScores.concise = 0;
  categoryScores.style = 0;
  categoryScores.public = 0;
  categoryScores.syntax = 0;
  categoryScores.overall = 0;

  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  loadQuestion();
});

loadQuestion();
