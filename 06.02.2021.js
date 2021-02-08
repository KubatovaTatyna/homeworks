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
example1.style.backgroundColor = "#ff9999";
example1.style.color = "white";
example1.style.border = "1px solid ##000000";


example2.style.backgroundColor = "#ff9999";
example2.style.color = "white";
example2.style.border = "1px solid ##000000";

example3.style.backgroundColor = "#ff9999";
example3.style.color = "white";
example3.style.border = "1px solid #000000";

example4.style.backgroundColor = "#ff9999";
example4.style.color = "white";
example4.style.border = "1px solid ##000000";

example5.style.backgroundColor = "#ff9999";
example5.style.color = "white";
example5.style.border = "1px solid ##000000";


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
h1.style.color = "rgb("+ r +","+ g +","+ b +")";
};
example1.addEventListener("click" , randomColor);

let fontSize = 45;
example4.addEventListener("click" , function(){
    h1.style.fontSize = (fontSize + 10) +"px";
})
example5.addEventListener("click" , function(){
    h1.style.fontSize = (fontSize - 10) +"px";
})