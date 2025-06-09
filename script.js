// Phone Enigma
const phoneFigure = document.getElementById("figure-phone");

let morseAudio = new Audio("resources/morsecode.wav");
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
    displayPopUp("�ͣx7Ǥ�ƨȯɃɖ��", "4_2");
});

// Journal Enigma
const journalFigure = document.getElementById("figure-journal");

journalFigure.addEventListener("click", () => {
    console.log("MjIyIG1pbGhhcmVzIGRlIG1pbGhhcmVz");
    
     console.log();

    displayPopUp("log(4)/log(64)", "Check the console");
});

// Close pop-up
let closePopUp = document.getElementById("close-pop-up");

closePopUp.addEventListener("click", () => {
    displayPopUp(); // If will remove the pop up
});

// Functions
function displayPopUp(title = "", text = "") {
    let popUp = document.getElementById("pop-up");

    if(popUp.classList.contains("show")) {
        popUp.classList.remove("show");
        return;
    }

    popUp.classList.add("show");

    let popUpTitle = document.getElementById("title-pop-up");

    let popUpText = document.getElementById("text-pop-up");

    popUpTitle.textContent = title;
    popUpText.textContent = text;
};