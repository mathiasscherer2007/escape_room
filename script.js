// Phone Enigma
const phoneFigure = document.getElementById("figure-phone");

let morseAudio = new Audio("path");
let isAudioplaying = false;

phoneFigure.addEventListener("click", () => {
    // Checks if the audio is already playing, so it will not have duplicates
    if(!isAudioplaying) {
        isAudioplaying = true;

        morseAudio.play();

        // After the audio is played, the variable will turn false
        setTimeout(morseAudio.duration + 1, () => {isAudioplaying = false});
    };
});

// Ball Enigma
const ballFigure = document.getElementById("figure-ball");

ballFigure.addEventListener("click", () => {

});

// Journal Enigma
const journalFigure = document.getElementById("figure-journal");

const popUp = document.createElement("div");
popUp.id = "pop-up";
popUp.innerHTML = 
    `<h2>O presidente foi morto!</h2>
    <p>No jornal está escrito, "O console é a resposta".</p>
    <p id="close-p">X</p>`;

journalFigure.addEventListener("click", () => {
    document.appendChild(popUp);

    const closePopUp = document.getElementById("close-p");
    closePopUp.addEventListener("click", () => {
        document.removeChild(popUp);
    })
});