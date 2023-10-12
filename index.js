// let myAge = 50
// const myUpdatedAge = myAge + 3
// console.log(myUpdatedAge)

// let myAge = 50
// myAge = myAge + 1
// console.log(myAge)

// let myAge = 50
// myAge++
// console.log(myAge)


// let firstSemester = 1
// let secondSemester = 1

// let sum = firstSemester + secondSemester

// if (sum <= 3.2){
//     console.log("Sorry bro, your grades dropped")
// }else if(sum === 3.8){
//     console.log("Ghe ghe, you na upper o")
// }else{
//     console.log("guy go learn work");
// }





let firstCard = 3
let secondCard = 2
let hasNaijaWhot = false
let isAlive = true
let sum = firstCard + secondCard
let massage = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function startGame(){
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you have a new card?"
    }else if(sum === 26){
        message = "Congrats! You Won!!!"
        hasNaijaWhot = true
    }else{
        message = "You Lost. OLODO!!!"
        isAlive = false
    }

    messageEl.textContent = message
}



function newCard(){
    let card = 6
    sum += card
    renderGame()
}



// array for messages

let sentence = ["hello, " + "my " + "name " + "is " + "Tech-Lady"]
let greetingEl = document.getElementById("greeting-el")

greetingEl.textContent = sentence