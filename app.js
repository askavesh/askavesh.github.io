const effectdiv = document.getElementById("effect");
const promptspan = document.getElementById("prompt");
const info = document.getElementById("info-progress");
const box = document.getElementById("cum-box");

const prompts = ["Ahhh!!", "Nnnghh ♥︎♥︎♥︎", "Please stop ♥︎"];

const CLICKS_BEFORE_CLIMAX = 20;

let clickcount = 0;
let last_time = 0;

animate_progress()

function animate_progress() {
    let progress = clickcount/CLICKS_BEFORE_CLIMAX;

    console.log(progress * 100);

    if (progress > 1) {
        box.classList.add("glaze");
        promptspan.remove()
    } else {
        info.style.background = `linear-gradient(90deg, #ffffff 0%, #ffffff ${progress * 100}%, #ffffff00 ${progress * 100}%, #ffffff00 100%)`;
        info.style.backgroundClip = "text";

        requestAnimationFrame(animate_progress);
    }
}
function randomize_prompt() {
    let index = Math.floor(Math.random() * prompts.length);
    promptspan.textContent = prompts[index];

    let rect = promptspan.getBoundingClientRect();
    
    let x_pos = (window.innerWidth - rect.width) * Math.random();
    let y_pos = (window.innerHeight - rect.height) * Math.random();
    let orientation = Math.random() * 60 - 30;
    

    promptspan.style.rotate = orientation + "deg";
    promptspan.style.left = x_pos + "px";
    promptspan.style.top = y_pos + "px";
}

box.addEventListener("animationend", () => {
    console.log("Do your thing here")

    
})
effectdiv.addEventListener("animationend", () => {
    effectdiv.classList.remove("pulse")
})

document.addEventListener("pointerdown", (event) => {
    if (event.button == 0) {
        clickcount++;
    }
})
document.addEventListener("click", (event) => {
    effectdiv.style.width = event.width * 20;
    effectdiv.style.height = event.height * 20;
    effectdiv.style.left = event.clientX + "px";
    effectdiv.style.top = event.clientY + "px";

    effectdiv.classList.add("pulse")

    randomize_prompt()
})