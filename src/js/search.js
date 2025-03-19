document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const articles = document.querySelectorAll('.coche');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const description = article.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Buscar al hacer clic en el botón
    searchButton.addEventListener('click', performSearch);

    // Buscar al presionar Enter
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Búsqueda en tiempo real mientras se escribe
    searchInput.addEventListener('input', performSearch);
});