document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const tvShowContainer = document.getElementById('tvShowContainer');
    const tvShows = tvShowContainer.getElementsByClassName('tv-show');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        Array.from(tvShows).forEach(tvShow => {
            const title = tvShow.querySelector('.tv-show-details h2').textContent;
            if (title.toLowerCase().includes(filter)) {
                tvShow.style.display = '';
            } else {
                tvShow.style.display = 'none';
            }
        });
    });
});
