// Simple search functionality (for demonstration)
function searchArticles() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
