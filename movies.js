document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tvShowContainer = document.getElementById('tvShowContainer');
    const tvShows = tvShowContainer.querySelectorAll('.tv-show');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        tvShows.forEach(tvShow => {
            const tvShowTitle = tvShow.querySelector('h2').textContent.toLowerCase();

            if (tvShowTitle.includes(searchTerm)) {
                tvShow.style.display = 'block'; // Show the TV show
            } else {
                tvShow.style.display = 'none'; // Hide the TV show
            }
        });
    });
});
