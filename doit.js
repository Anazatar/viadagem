
//animacao da polaroid em fotos.html
function openModal(element) {
    var modal = document.getElementById("polaroidModal");
    var modalImg = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");

    var imgSrc = element.querySelector("img").src; 
    var captionText = element.querySelector(".caption").innerText; 

    modalImg.src = imgSrc; 
    modalCaption.innerText = captionText; 
    modal.style.display = "flex";  
}


function closeModal() {
    var modal = document.getElementById("polaroidModal");
    modal.style.display = "none";  
}


//poemas.html - parte dos poemas 

function expandirPoema(cartao) {
    // Seleciona todos os cartões de poema
    const cartoes = document.querySelectorAll(".cartao-poema");

    // Fecha todos os outros cartões, removendo a classe 'expandido'
    cartoes.forEach(outroCartao => {
        if (outroCartao !== cartao) {
            outroCartao.classList.remove("expandido");
        }
    });

    // Alterna o estado expandido do cartão clicado
    cartao.classList.toggle("expandido");
}
