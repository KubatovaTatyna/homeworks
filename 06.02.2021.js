let h1 = document.createElement("h1");
h1.innerText = 0;
document.body.append(h1);

let ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.id = "example" + i;

    li.append(button);
    ul.append(li);
}
document.body.append(ul);

// example1.addEventListener("click" , function(){
//     for (let increse = 0; increse < array.length; increse++) {
//         const element = array[increse];
        
//     }
// })
// if (example1.addEvenListenner("click" , function(){
//     for (let increase = 1; increase < 10; increase++) {
//         h1.innerText = increase;
//     }
// })) {
    
// }
// example2.addEventListener("click" , function(){ 
//     for (let increase = 0; increase <= 10; increase++) {
//         h1.innerText = increase;
//     }
// });
// example3.addEventListener("click" , function(){
//     for (let size = 0; size <= 5; size++) {
//         h1.style.fontSize = size;
//     }
// })
example1.innerText = "Random color";
example2.innerText = "+";
example3.innerText = "-";
example4.innerText = "Increase";
example5.innerText = "Descrase";
h1.style.fontSize = 45 +"px";


let number = 0;
example2.addEventListener("click" , function(){
    h1.innerText = ++number;
})
example3.addEventListener("click" , function(){
    h1.innerText = --number;
}); 

function randomColor(){
let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
h1.style.color = "rgb("+r+","+g+","+b+")";
};
example1.addEventListener("click" , randomColor);