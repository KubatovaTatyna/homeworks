document.body.addEventListener('mousedown' , function(event){
    let div = document.createElement('div');
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'red';
    div.style.width = '30px';
    div.style.height = '30px';

    document.body.append(div);

    div.style.position = "absolute";
    div.style.top = event.clientY - 15 + "px" ;
    div.style.left = event.clientX - 15 + "px";

    if(event.which == 2){
        div.style.backgroundColor = 'green';
        }
    else if(event.which == 3){
            div.style.backgroundColor = 'blue';
            event.preventDefault();
    }
    
    if (event.ctrlKey) {
        div.style.borderRadius = '0';
        }
        else if (event.shiftKey) {
            div.style.borderRadius = '0';
            div.style.width = '60px';
            div.style.height = '30px';
        }
        else if (event.altKey) {
            div.style.borderRadius = '50%';
            div.style.width = '60px';
            div.style.height = '30px';
        }
});