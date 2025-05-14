document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.politica-item');
    
    items.forEach(item => {
        const titulo = item.querySelector('.politica-titulo');
        titulo.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});