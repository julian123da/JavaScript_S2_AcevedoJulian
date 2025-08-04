document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("PlayButton");
  const startGameButton = document.getElementById("StartGame");
  const startScreen = document.getElementById("StartScreen");
  const rules = document.getElementById("Rules");
  const game = document.getElementById("Game");

  playButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    rules.classList.remove("hidden");
  });

  startGameButton.addEventListener("click", () => {
    rules.classList.add("hidden");
    game.classList.remove("hidden");
    drawCards();
  });

  const newRoundButton = document.getElementById("NewRound");
  newRoundButton.addEventListener("click", drawCards);
});

function drawCards() {
  const cardContainer = document.getElementById("CardContainer");
  cardContainer.innerHTML = 'Cargando cartas...';

  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=5')
    .then(res => res.json())
    .then(data => {
      cardContainer.innerHTML = '';
      data.cards.forEach(card => {
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.code;
        img.title = card.code;
        img.addEventListener('click', () => showZodiac(card.value));
        cardContainer.appendChild(img);
      });
    });
}

function showZodiac(value) {
  const zodiacMap = {
    "ACE": "Aries: Impulsivo, valiente.",
    "2": "Tauro: Paciente, determinado.",
    "3": "Géminis: Curioso, adaptable.",
    "4": "Cáncer: Emocional, protector.",
    "5": "Leo: Creativo, líder.",
    "6": "Virgo: Analítico, perfeccionista.",
    "7": "Libra: Equilibrado, sociable.",
    "8": "Escorpio: Intenso, misterioso.",
    "9": "Sagitario: Aventurero, optimista.",
    "10": "Capricornio: Ambicioso, disciplinado.",
    "JACK": "Acuario: Original, independiente.",
    "QUEEN": "Piscis: Empático, soñador.",
    "KING": "Ofiuco: Sabio, transformador (comodín)."
  };

  const description = zodiacMap[value] || "Signo no definido";
  alert(description);

}