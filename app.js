let user_choice
let computer_choice
let gotresult
let chosenItem_user
let chosenItem_pc
let winner
let playground
let background

const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const choices = document.querySelectorAll("button")
const mainBackground = document.getElementById("main-body")
const buttonOn = document.addEventListener("onclick", () => console.log("button on"))
const buttonOff = document.addEventListener("Mouse leave", () => console.log("button off"))
const versus = document.getElementById("versus")
const subVersus = document.getElementById("ver")
const userScore = document.getElementById("score-user-span")
const pcScore = document.getElementById("score-pc-span")
const panel = document.getElementById("griditem1")
const controlPanel = document.querySelectorAll(".controlPanel")


const imgRock = '<img src="/assets/rock.png">'
const imgPaper = '<img src="/assets/paper.png">'
const imgScissors = '<img src="/assets/scissors.png">'


mainBackground.style.backgroundImage = "none"


window.onload = () => {
    controlPanel.forEach((e) => e.classList.replace("hide", "controlPanel"))
    subVersus.classList.replace("hide", "show")
    versus.classList.replace("show", "hide")
    panel.classList.replace("hide", "grid-item1")
    console.log("hey")
}

const items = {
    Rock: imgRock,
    Paper: imgPaper,
    Scissors: imgScissors
}
const sad_emojies = {
    1: '😪',
    2: '😥',
    3: '😤',
    4: '😫',
    5: '😓',
    6: '😢',
    7: '😭',
    8: '😖',
    9: '😬'
}
const happy_emojies = {
    1: '😋',
    2: '🤗',
    3: '😏',
    4: '😎',
    5: '😊',
    6: '😚',
    7: '😍',
    8: '🥰',
    9: '🙂'
}




let scores = {
    pc: 0,
    user: 0,
    cal: (pc, user) => {
        this.pc = pc
        this.user = user

    }
}
window.addEventListener("load", ()=>{
    setTimeout(function () {
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 1);
});


choices.forEach(choice => choice.addEventListener("click", (e) => {
    background = document.getElementById(e.target.id)

    //after window loads show versus
    versus.classList.replace("hide", "show")
    subVersus.classList.replace("show", "hide")
    //User's choice
    user_choice = e.target.id
    chosenItem_user = items[user_choice]
    console.log(chosenItem_user);
    userChoiceDisplay.innerHTML = chosenItem_user

    //Computer's choice
    computer_choice = getRandomChoice()

    chosenItem_pc = items[computer_choice]
    console.log(computer_choice)
    computerChoiceDisplay.innerHTML = chosenItem_pc
    computerChoiceDisplay.style

    //Display results
    gotresult = getResult(user_choice, computer_choice)
    resultDisplay.innerHTML = gotresult
    getScores(scores)

    console.log("pc: " + scores.pc + " | " + "user :" + scores.user)
    userScore.innerHTML = scores.user
    pcScore.innerHTML = scores.pc



}))


getKeyByValue = (object, value) => {
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
                return prop
        }
    }
}

const getRandomValue = values => Math.floor(Math.random() * values.length) + 1
const getRandomChoice = () => {
    let randomNumber = getRandomValue(choices)
    switch (randomNumber) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
        default:
            return "I Give up ! T_T"
    }
}

const getResult = (user_choice, computer_choice) => {
    let sad = getRandomValue(Object.keys(sad_emojies))
    let happy = getRandomValue(Object.keys(happy_emojies))
    if (user_choice === computer_choice) {
        winner = ""
        return "😐"
    }
    if ((user_choice === "Rock") && (computer_choice === "Paper")) {
        winner = "pc"
        return sad_emojies[sad]
    }
    if ((user_choice === "Rock") && (computer_choice === "Scissors")) {
        winner = "user"
        return happy_emojies[happy]
    }
    if ((user_choice === "Scissors") && (computer_choice === "Rock")) {
        winner = "pc"
        return sad_emojies[sad]
    }
    if ((user_choice === "Paper") && (computer_choice === "Rock")) {
        winner = "user"
        return happy_emojies[happy]
    }
    if ((user_choice === "Paper") && (computer_choice === "Scissors")) {
        winner = "pc"
        return sad_emojies[sad]
    }
    if ((user_choice === "Scissors") && (computer_choice === "Paper")) {
        winner = "user"
        return happy_emojies[happy]
    }
    else {
        return undefined
    }

}

const button_color_change = () => {
    if (winner === "user") {
        background.style.backgroundColor = "#00ff00"
    } else if (winner === "pc") {
        background.style.backgroundColor = "#ff0000"
    }
    else {
        background.style.backgroundColor = "#ffffff"
    }
}

const button_color_reset = () => {
    // background.style.backgroundColor = "#ffffff"
}





const getScores = (scores) => {
    playground = document.getElementById("griditem1")
    switch (winner) {
        case "pc":
            scores.pc++
            // playground.style.backgroundColor = "#FF0000C2"
            mainBackground.style.backgroundColor = "#FF000036"
            setTimeout(() => mainBackground.style.backgroundColor = "#ffffff", 400)
            // setTimeout(() => playground.style.backgroundColor = "#FFffff", 2000)

            break
        case "user":
            scores.user++
            // playground.style.backgroundColor = "#00FF009F"
            mainBackground.style.backgroundColor = "#00FF004B"
            setTimeout(() => mainBackground.style.backgroundColor = "#ffffff", 400)
            // setTimeout(() => playground.style.backgroundColor = "#FFffff", 2000)
            break
        default:
            playground.style.backgroundColor = "#FFFFFF00"
            mainBackground.style.backgroundColor = "#ffffff"
            break;
    }

    if (scores.pc === 5) {
        scores.pc = 5
        setTimeout(() => window.location.reload(), 2000);
        subVersus.classList.replace("hide", "show")
        versus.classList.replace("show", "hide")
        subVersus.innerText = "That's a Loss! try again?"
        panel.classList.replace("grid-item1", "hide")
        controlPanel.forEach((e) => e.classList.replace("controlPanel", "hide"))
        // setTimeout(alert, 3000,"That's a Loss! try again?" )
        // alert("")

    }
    if (scores.user === 5) {
        scores.user = 5
        mainBackground.style.backgroundImage = 'url("assets/fireworks.gif")'
        setTimeout(() => window.location.reload(), 2000);
        subVersus.classList.replace("hide", "show")
        versus.classList.replace("show", "hide")
        let h2 = document.createElement('h2')
        panel.classList.replace("grid-item1", "hide")
        controlPanel.forEach((e) => e.classList.replace("controlPanel", "hide"))
        // setTimeout(alert, 5000, "Good Job, You Won!")
        // alert()

    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))