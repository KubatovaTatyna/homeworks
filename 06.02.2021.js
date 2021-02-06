let h1 = document.createElement("h1");
h1.innerText = "0";
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