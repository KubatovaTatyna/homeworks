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

});