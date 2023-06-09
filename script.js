let btn = document.querySelector('.voltar');
let widthScreen = window.screen.width;

if (widthScreen < 1220){
    alert("Está página ainda não foi adaptada para dispositivos móveis");
}

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
    behavior: "smooth",
});