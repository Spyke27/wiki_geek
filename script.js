let btn = document.querySelector('.voltar');
let widthScreen = window.screen.width;

document.addEventListener("DOMContentLoaded", function() {
    if(widthScreen < 1200){
        alert("Está página ainda não foi adaptada para dispositivos móveis!")
    }
  });


btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
    "smooth"
});