let h1 = document.createElement("h1");
h1.innerText = 0;
document.body.append(h1);

let ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Example " + "#" +i;
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

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    h1.style.color = "#" + randomColor;
  }
  example1.addEventListener("click", setBg);
setBg();


// example2.addEventListener("click", function(){
//     h1.innerText = h1 + 1;
// })
// example3.addEventListener("click", function(){
//     h1.innerText = Number( Number(h1) - 1);
// })
// example4.addEventListener("click", function(){
//     h1.style.fontSize =  h1 + 10 + "px";
// })