// Função para alternar o tema
document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("background-music");
    music.play().catch(error => {
        console.log("Autoplay bloqueado. O usuário precisa interagir primeiro.");
    });
});