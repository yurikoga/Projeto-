const toggleBtn = document.getElementById('toggleBtn');
const card = document.getElementById('card');

toggleBtn.addEventListener('click', () => {
    // Alterna a classe 'active' no card principal
    card.classList.toggle('active');

    // Altera o texto do botão conforme o estado
    if (card.classList.contains('active')) {
        toggleBtn.textContent = 'CANCEL';
    } else {
        toggleBtn.textContent = 'SHARE';
    }
});
