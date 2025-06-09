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

journalFigure.addEventListener("click", () => {
    
     console.log();

    displayPopUp("You cliked it", "Check console");
});

// Close pop-up
let closePopUp = document.getElementById("close-pop-up");

closePopUp.addEventListener("click", () => {
    displayPopUp();
});

// Functions
function displayPopUp(title = "", text = "") {
    let popUp = document.getElementById("pop-up");

    if(popUp.classList.contains("show")) {
        popUp.classList.remove("show");
        return;
    } else {
        popUp.classList.add("show");
    }

    let popUpTitle = document.getElementById("title-pop-up");

    let popUpText = document.getElementById("text-pop-up");

    popUpTitle.textContent = title;
    popUpText.textContent = text;
};