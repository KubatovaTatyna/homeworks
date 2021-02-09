let button = document.querySelector('button');
let password = document.querySelector("#password");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplicationButton = document.querySelector("#multiplication");
let divisionButton = document.querySelector("#division");

let numberInput = document.querySelector("#number");
let numberInput2 = document.querySelector("#number-2");
let numberInput3 = document.querySelector("#number-3");

let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

p.innerText = "";
p1.innerText = "";
p2.innerText = "";

document.body.append(p);
document.body.append(p1);
document.body.append(p2);

password.addEventListener('input' , function(event){
    if(password.value.length <= 5){
        p.innerText = "Bad!"
    }
    else if(password.value.length  >= 5){
        p.innerText = "Good!"
    }
    else if(password.value.length  >= 10){
        p.innerText = "Excellent!"
    }
})

let randomNumber = Math.random() * 6 ;
randomNumber.toFixed;
numberInput.addEventListener('input' , function(event){
    if(numberInput.value > randomNumber){
        p1.innerText = "You win! The number is " + randomNumber.toFixed();
    }
    else{
        p1.innerText = "You lost! The number is " + randomNumber.toFixed();
    }
})
console.log(randomNumber);

// plusButton.addEventListener('click' , function(event){
//     p2.innerText = numberInput2.value + numberInput3.value;
// });