const playBtn = document.getElementById("PlayButton");
const startScreen = document.getElementById("StartScreen");
const rulesScreen = document.getElementById("Rules");
const startGameBtn = document.getElementById("StartGame");
const gameScreen = document.getElementById("Game");

playBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  rulesScreen.classList.remove("hidden");
});

startGameBtn.addEventListener("click", () => {
  rulesScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
});

function startGame() {
  gameScreen.innerHTML = `
    <div id="CardContainer" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; padding: 30px;"></div>
    <div style="text-align: center; margin-top: 20px;">
      <button id="NewRound" class="start-button">Nueva Ronda</button>
    </div>
  `;

  const cardContainer = document.getElementById("CardContainer");
  const newRoundButton = document.getElementById("NewRound");

  function drawCards() {
    cardContainer.innerHTML = 'Cargando cartas...';

    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=5')
      .then(res => res.json())
      .then(data => {
        cardContainer.innerHTML = '';
        data.cards.forEach(card => {
          const img = document.createElement('img');
          img.src = card.image;
          img.alt = card.code;
          img.style.width = '120px';
          img.style.borderRadius = '10px';
          img.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
          img.style.transition = 'transform 0.3s ease';
          img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
          });
          img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
          });
          cardContainer.appendChild(img);
        });
      });
  }

  drawCards();

  newRoundButton.addEventListener('click', () => {
    if (!rulesScreen.classList.contains("hidden")) {
      rulesScreen.classList.add("hidden");
    }
    drawCards();
  });
}
