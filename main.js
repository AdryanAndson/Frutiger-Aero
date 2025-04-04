
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as janelas
    const janelas = document.querySelectorAll(".janela");

    janelas.forEach(janela => {
        const barraTitulo = janela.querySelector(".barra-titulo"); // Define a barra de título como área de arraste
        let offsetX = 0, offsetY = 0, isDragging = false;

        // Quando o usuário pressiona o botão do mouse
        barraTitulo.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - janela.offsetLeft;
            offsetY = e.clientY - janela.offsetTop;
            janela.style.position = "absolute"; // Garante que a posição pode ser alterada
            janela.style.zIndex = "1000"; // Para manter a janela em cima
        });

        // Quando o usuário move o mouse
        document.addEventListener("mousemove", function (e) {
            if (!isDragging) return;
            janela.style.left = e.clientX - offsetX + "px";
            janela.style.top = e.clientY - offsetY + "px";
        });

        // Quando o usuário solta o botão do mouse
        document.addEventListener("mouseup", function () {
            isDragging = false;
        });
    });
});

