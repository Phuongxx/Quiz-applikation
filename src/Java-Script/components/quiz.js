function nextQuestion() {
  const app = document.createElement("main");
  app.setAttribute("class", "app");

  // headerSection markline for better overview

  const header = document.createElement("header");
  header.setAttribute("class", "app__progress-board");

  const progressTitle = document.createElement("h1");
  progressTitle.setAttribute("class", "app__progress-title");
  progressTitle.textContent = quizQuestion[0].question;

  const progressBar = document.createElement("progress");
  progressBar.setAttribute("class", "app__progress-bar");

  const appLivesContainer = document.createElement("ul");
  appLivesContainer.setAttribute("class", "app__lives");

  header.append(progressTitle, progressBar, appLivesContainer);

  for (let life = 0; life < 5; life++) {
    const hpLife = document.createElement("li");
    hpLife.setAttribute("class", "app__life");

    const lifeImg = document.createElement("img");
    lifeImg.src = "src/img/pixelHeart.png";
    lifeImg.alt = "";

    hpLife.appendChild(lifeImg);
    appLivesContainer.appendChild(hpLife);
  }

  // questionSection markline for better overview

  const questionsContainer = document.createElement("section");
  questionsContainer.setAttribute("class", "app__questions");

  const questionText = document.createElement("h2");
  questionText.className = "app__question-text";
  questionText.textContent = "Hallo wie gehts dir? ";

  const answersList = document.createElement("ul");
  answersList.className = "app__answers-list";

  for (let answer = 0; answer < 4; answer++) {
    const liAnswerEl = document.createElement("li");

    const buttonAnswerEl = document.createElement("button");
    buttonAnswerEl.className = "app__answer";
    buttonAnswerEl.textContent = "answer";

    liAnswerEl.appendChild(buttonAnswerEl);
    answersList.appendChild(liAnswerEl);
  }

  // controlsButton markline for better overview

  const controls = document.createElement("div");
  controls.className = "app__controls";

  const showAnswerButton = document.createElement("button");
  showAnswerButton.className = "app__button";
  showAnswerButton.textContent = "show answer";

  const nextButton = document.createElement("button");
  nextButton.className = "app__button";
  nextButton.textContent = "next question";

  controls.appendChild(showAnswerButton);
  controls.appendChild(nextButton);

  questionsContainer.append(questionText, answersList, controls);

  app.append(header, questionsContainer);

  document.getElementById("wrapper").appendChild(app);

  console.log(app);
}
