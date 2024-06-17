document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search input");
    const subscribeButton = document.getElementById("subscribeButton");
    const userProfile = document.getElementById("userProfile");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const movieCards = document.querySelectorAll(".card");
    const changeProfileLink = dropdownMenu.querySelector("a[href='#changeProfile']");
    const logoutLink = dropdownMenu.querySelector("a[href='#logout']");

    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        movieCards.forEach(card => {
            const title = card.querySelector(".title").textContent.toLowerCase();
            if (title.includes(searchValue)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    subscribeButton.addEventListener("click", () => {
        if (subscribeButton.textContent === "Subscribe") {
            subscribeButton.textContent = "Subscribed";
            subscribeButton.classList.add("subscribed");
        } else {
            subscribeButton.textContent = "Subscribe";
            subscribeButton.classList.remove("subscribed");
        }
    });

    userProfile.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    changeProfileLink.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent default link behavior
        // Logic to open file input for changing profile pic
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', () => {
            // Logic to handle file upload
            console.log('Selected file:', fileInput.files[0]);
        });
        fileInput.click();
    });

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent default link behavior
        // Redirect to login page
        window.location.href = "login.html";
    });

    document.addEventListener("click", (event) => {
        if (!userProfile.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
