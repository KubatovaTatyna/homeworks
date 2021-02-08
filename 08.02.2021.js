let button = document.querySelector('button');
let password = document.querySelector("#password");
let p = document.createElement("p");
p.innerText = "";
document.body.append(p);

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