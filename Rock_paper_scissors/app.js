const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const choices = document.querySelectorAll("button")

let user_choice
let computer_choice
let gotresult
let counter
let winner = ''

let scores = {
    pc: 0,
    user: 0,
    cal: (pc, user)=>{
        this.pc = pc
        this.user = user

      
        if(this.pc === 10 || this.user === 10){
            counter = "done"
        }
        while (counter !== "done"){
            if (this.pc > this.user) {
                return "Losing..."
            }
            else if(this.pc < this.user) {return "Winning!"}
            else if (this.user === 10) {
                winner = "user"
                counter = "done"
                return  winner
            }else if(this.pc === 10){
                winner = "computer"
                counter = "done"
                return winner
            }
        }
    }
}

choices.forEach(choice => choice.addEventListener("click", (e)=>{
    user_choice = e.target.id
    userChoiceDisplay.innerHTML = user_choice
    computer_choice = getRandomChoice()
    computerChoiceDisplay.innerHTML = computer_choice
    gotresult = getResult(user_choice, computer_choice)
    resultDisplay.innerHTML = gotresult
    console.log(gotresult)
    console.log(getScores(scores))
    console.log(scores.pc + " | " + scores.user )

}))

const getRandomChoice = ()=>{
    let randomNumber = Math.floor(Math.random()*choices.length) + 1
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

const getResult = (user_choice, computer_choice)=>{

    if (user_choice === computer_choice){ return "Draw!"} 
    if((user_choice === "Rock") && (computer_choice === "Paper")) {return "You Lost!"}
    if((user_choice === "Rock") && (computer_choice === "Scissors")){return "You Won!"} 
    if((user_choice === "Scissors") && (computer_choice === "Rock")){ return "You Lost!"}
    if((user_choice === "Paper") && (computer_choice === "Rock")) {return "You Won!"}
    if((user_choice === "Paper") && (computer_choice === "Scissors")){return "You Lost!"}
    if((user_choice === "Scissors") && (computer_choice === "Paper")){return "You Won!"}
    else{
        return undefined
    }

}




const getScores = (scores) => {
    switch (gotresult) {
        case "You Lost!":
            scores.pc ++
        case "You Won!":
            scores.user++
        default:
            break;
    }
    return scores.cal(this.pc, this.user)
}