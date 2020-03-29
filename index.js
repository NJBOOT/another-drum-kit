for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}

function handleClick() {

    let buttonName = this.innerHTML
    makeSound(buttonName);
    buttonAnimation(buttonName);
}

document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            let bass = new Audio("./sounds/kick-bass.mp3")
            bass.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            let tomOne = new Audio("./sounds/tom-1.mp3")
            tomOne.play();
            break;
        case "j":
            let tomTwo = new Audio("./sounds/tom-2.mp3")
            tomTwo.play();
            break;
        case "k":
            let tomThree = new Audio("./sounds/tom-3.mp3")
            tomThree.play();
            break;
        case "l":
            let tomFour = new Audio("./sounds/tom-4.mp3")
            tomFour.play();
            break;
        default: console.log(key)
    }

}

function buttonAnimation (currentKey){
   let activeButton = document.querySelector("." + currentKey)
   activeButton.classList.add("pressed")

   setTimeout(function(){
       activeButton.classList.remove("pressed")
   }, 100)
}