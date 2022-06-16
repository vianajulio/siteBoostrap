document.addEventListener('click', function(e){
    if (e.target.classList.contains('gallery-item')){
        const src = e.target.getAttribute('src');
        /* inserindo o caminho da imagem selecionada no modal*/
        document.querySelector(".modal-img").src = src;

        /* inicia um modal com a imagem selecionada*/
        const meuModal = new bootstrap.Modal(document.getElementById('galeria-modal'));
        meuModal.show();
    }
})