const box = document.querySelector('.box');
const adicional = document.querySelector('.adicional');

box.addEventListener('click', function() {
    if (adicional.style.display === 'none') {
        adicional.style.display = 'block'; // Mostra o conteúdo quando a div é clicada
    } else {
        adicional.style.display = 'none'; // Oculta o conteúdo se ele já estiver visível
    }
});

