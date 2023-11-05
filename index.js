const keys = document.querySelectorAll(".key");
for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener("click",function(){
        volume(this.innerText);
        anim(this.innerHTML);
    });
}
document.addEventListener("keydown",function(e){
    volume(e.key)
    anim(e.key)
})

function volume(note){
    switch (note) {
        case "a":
            sound = new Audio("./sounds/C.mp3");
            sound.play();
            break;
        case "w":
            sound = new Audio("./sounds/Db.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("./sounds/D.mp3");
            sound.play();
            break;
        case "e":
            sound = new Audio("./sounds/Eb.mp3");
            sound.play();
            break;
        case "d":
            sound = new Audio("./sounds/E.mp3");
            sound.play();
            break;
        case "space":
            sound = new Audio("./sounds/F.mp3");
            sound.play();
            break;
        case " ":
            sound = new Audio("./sounds/F.mp3");
            sound.play();
            anim("space");
            break;
        case "j":
            sound = new Audio("./sounds/G.mp3");
            sound.play();
            break;
        case "u":
            sound = new Audio("./sounds/Gb.mp3");
            sound.play();
            break;
        case "i":
            sound = new Audio("./sounds/Ab.mp3");
            sound.play();
            break;
        case "k":
            sound = new Audio("./sounds/A.mp3");
            sound.play();
            break;
        case "o":
            sound = new Audio("./sounds/Bb.mp3");
            sound.play();
            break;
        case "l":
            sound = new Audio("./sounds/B.mp3");
            sound.play();
            break;
        
        default:
            break;
    }
}
function anim(downPress) {
    const keyElement = document.getElementById(downPress);
    if (keyElement.classList.contains("white")) {
        keyElement.classList.add("whitepressed");
        setTimeout(function() {
            keyElement.classList.remove("whitepressed");
        }, 150);
    }else{
        keyElement.classList.add("blackpressed");
        setTimeout(function() {
            keyElement.classList.remove("blackpressed");
        }, 150);
    }
        
}