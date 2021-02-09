let button = document.querySelector('button');
let password = document.querySelector("#password");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplicationButton = document.querySelector("#multiplication");
let divisionButton = document.querySelector("#division");
let underText = document.querySelector("#under-text")
let underText2 = document.querySelector("#under-text2")
let underText3 = document.querySelector("#under-text3")

let numberInput = document.querySelector("#number");
let numberInput2 = document.querySelector("#number-2");
let numberInput3 = document.querySelector("#number-3");

let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

p.innerText = "";
p1.innerText = "";
p2.innerText = "";

underText.append(p);
underText2.append(p1);
underText3.append(p2);

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

plusButton.addEventListener('click' , function(event){
    let plus = numberInput2.value + numberInput3.value;
    p2.innerText = String(plus);
});
console.log(typeof plus)