'use strict';

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("./assets/happy-happy-happy-cat.mp3")
let sadSound = new Audio("./assets/crying-cat.mp3")

btnYes.addEventListener('click', () => {
    image.src = "https://media.tenor.com/-qBsG1HwR4oAAAAM/cat-dance-dancing-cat.gif";
    title.innerHTML = "Aww, Jg tv dea ng😍😍";
    sadSound.pause();
    happySound.play();
    happySound.loop = true;
})
let btnYesScale = 1;
let btnNoScale = 1;


btnNo.addEventListener('click', () => {
    image.src = "https://media.tenor.com/hLJJl7NjpN4AAAAM/jenminismo.gif";
    title.innerHTML = "Tv Tv hey, somvor 😭😭🙏";
    happySound.pause();
    sadSound.play();
    sadSound.loop = true;
    btnYesScale +=0.1;
    btnNoScale -=0.1;
    btnYes.style.transform = `scale(${btnYesScale})`;
    btnNo.style.transform = `scale(${btnNoScale})`;
})