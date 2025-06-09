window.addEventListener("load", () => {
    const startButton = document.getElementById("start-button") 
    setInterval(() => {
        startButton.style.visibility === "hidden" ? startButton.style.visibility = "visible" : startButton.style.visibility = "hidden";
    }, 1500);
})

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        window.location.href = "game.html";
    }
})