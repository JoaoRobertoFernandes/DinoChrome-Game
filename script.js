const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

function jump(){
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function(){
    //dino y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //cactus x position
    let cactusLeft =  parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    
    //collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game Over!");
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});
