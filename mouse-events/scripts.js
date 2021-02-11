let div = document.querySelector('#example');
document.body.addEventListener('mousedown', function(event){
    console.log(event.clientY , event.clientX);
    div.style.top = event.clientY + "px";
    div.style.left = event.clientX + "px";
});