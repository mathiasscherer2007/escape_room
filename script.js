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
        setTimeout(morseAudio.duration, () => {isAudioplaying = false});
    };
});

// Ball Enigma
const ballFigure = document.getElementById("figure-ball");

ballFigure.addEventListener("click", () => {

});

// Journal Enigma
const journalFigure = document.getElementById("figure-journal");

journalFigure.addEventListener("click", () => {
    
});