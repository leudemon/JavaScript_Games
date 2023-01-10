const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const choices = document.querySelectorAll("button")
const gif1 = document.createElement("img")//delete if not used
const mainBackground = document.getElementById("griditem1")
const background = document.getElementById('main-body')



let user_choice
let computer_choice
let gotresult
let chosenItem_user
let chosenItem_pc

const imgRock = '<img src="/assets/rock.png">'
const imgPaper = '<img src="/assets/paper.png">'
const imgScissors= '<img src="/assets/scissors.png">'

const items = {
    Rock: imgRock,
    Paper: imgPaper,
    Scissors: imgScissors
}

background.style.backgroundImage = "none"

let scores = {
    pc: 0,
    user: 0,
    cal: (pc, user) => {
        this.pc = pc
        this.user = user

    }
}

choices.forEach(choice => choice.addEventListener("click", (e) => {
    
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

    //Display results
    gotresult = getResult(user_choice, computer_choice)
    resultDisplay.innerHTML = gotresult
    console.log(gotresult)
    getScores(scores)
    console.log("pc: " + scores.pc + " | " + "user :" + scores.user)
    


}))


getKeyByValue = (object, value)=>{
    for (let prop in object){
        if (object.hasOwnProperty(prop)){
            if (object[prop] === value)
            return prop
        }
    }
}

const getRandomChoice = () => {
    let randomNumber = Math.floor(Math.random() * choices.length) + 1
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

    if (user_choice === computer_choice) { return "Draw!" }
    if ((user_choice === "Rock") && (computer_choice === "Paper")) { return "You Lost!" }
    if ((user_choice === "Rock") && (computer_choice === "Scissors")) { return "You Won!" }
    if ((user_choice === "Scissors") && (computer_choice === "Rock")) { return "You Lost!" }
    if ((user_choice === "Paper") && (computer_choice === "Rock")) { return "You Won!" }
    if ((user_choice === "Paper") && (computer_choice === "Scissors")) { return "You Lost!" }
    if ((user_choice === "Scissors") && (computer_choice === "Paper")) { return "You Won!" }
    else {
        return undefined
    }

}




const getScores = (scores) => {
    switch (gotresult) {
        case "You Lost!":
            scores.pc++
            mainBackground.style.backgroundColor = "#ff0000"
            break
        case "You Won!":
            scores.user++
            mainBackground.style.backgroundColor = "lightgreen"
            break
        default:
            mainBackground.style.backgroundColor = "white"
            break;
    }
    if (scores.pc === 5) {
        alert("That's a Loss! try again?")
        location.reload()
    }
    if (scores.user === 5) {


        alert("Good Job, You Won!")
        location.reload()
    }
}