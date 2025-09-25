const quizQuestion = [
  {
    id: 1,
    question: "In welchem Jahr erschien das erste Super Mario Bros.-Spiel?",
    answer: [
      { id: "a", text: "1990", correct: false },
      { id: "b", text: "1985", correct: true },
      { id: "c", text: "1978", correct: false },
      { id: "d", text: "1995", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "Wie heißt die Stadt, in der Grand Theft Auto V hauptsächlich spielt?",
    answer: [
      { id: "a", text: "Liberty City", correct: false },
      { id: "b", text: "Los Santos", correct: true },
      { id: "c", text: "Vice City", correct: false },
      { id: "d", text: "San Fierro", correct: false },
    ],
  },
  {
    id: 3,
    question: "Welches Pokémon ist die Nummer 25 im Pokédex?",
    answer: [
      { id: "a", text: "Glumanda", correct: false },
      { id: "b", text: "Mew", correct: false },
      { id: "c", text: "Pikachu", correct: true },
      { id: "d", text: "Bisasam", correct: false },
    ],
  },
  {
    id: 4,
    question: "In welchem Spiel sammelt man Ringe mit einem blauen Igel?",
    answer: [
      { id: "a", text: "Crash Bandicoot", correct: false },
      { id: "b", text: "Sonic the Hedgehog", correct: true },
      { id: "c", text: "Rayman", correct: false },
      { id: "d", text: "Donkey Kong", correct: false },
    ],
  },
  {
    id: 5,
    question: "Wie heißt die Prinzessin, die Mario oft retten muss?",
    answer: [
      { id: "a", text: "Daisy", correct: false },
      { id: "b", text: "Peach", correct: true },
      { id: "c", text: "Zelda", correct: false },
      { id: "d", text: "Rosalina", correct: false },
    ],
  },
  {
    id: 6,
    question:
      "Welches Monster explodiert in Minecraft, wenn man ihm zu nahe kommt?",
    answer: [
      { id: "a", text: "Enderman", correct: false },
      { id: "b", text: "Zombie", correct: false },
      { id: "c", text: "Creeper", correct: true },
      { id: "d", text: "Skelett", correct: false },
    ],
  },
  {
    id: 7,
    question: "In welchem Spiel steuert man den Helden Link?",
    answer: [
      { id: "a", text: "The Legend of Zelda", correct: true },
      { id: "b", text: "Final Fantasy", correct: false },
      { id: "c", text: "Dark Souls", correct: false },
      { id: "d", text: "Skyrim", correct: false },
    ],
  },
  {
    id: 8,
    question: "Wie heißt das beliebte Battle-Royale-Spiel von Epic Games?",
    answer: [
      { id: "a", text: "PUBG", correct: false },
      { id: "b", text: "Apex Legends", correct: false },
      { id: "c", text: "Fortnite", correct: true },
      { id: "d", text: "Warzone", correct: false },
    ],
  },
  {
    id: 9,
    question: "Welches Horror-Spiel spielt in einer Pizzeria mit Animatronics?",
    answer: [
      { id: "a", text: "Outlast", correct: false },
      { id: "b", text: "Five Nights at Freddy’s", correct: true },
      { id: "c", text: "Resident Evil", correct: false },
      { id: "d", text: "Silent Hill", correct: false },
    ],
  },
  {
    id: 10,
    question: "Wie heißt die Ego-Shooter-Reihe mit Master Chief?",
    answer: [
      { id: "a", text: "Halo", correct: true },
      { id: "b", text: "Doom", correct: false },
      { id: "c", text: "Call of Duty", correct: false },
      { id: "d", text: "Half-Life", correct: false },
    ],
  },
];

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
