let button = document.querySelector('button');
let password = document.querySelector("#password");
let p = document.createElement("p");
let p1 = document.createElement("p")
let numberInput = document.querySelector("#number");
p.innerText = "";
p1.innerText = "";
document.body.append(p);
document.body.append(p1);

button.addEventListener('click', function(event) {
    console.log(event);
    event.preventDefault();
});

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
numberInput.addEventListener('input' , function(event){
    if(numberInput.value > randomNumber){
        p1.innerText = "You win!"
    }
    else{
        p1.innerText = "You lost!"
    }
})
console.log(randomNumber);