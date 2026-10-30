

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});




const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// MOBILE SEARCH

const searchBox = document.querySelector(".search-box");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            searchInput.focus();
        }
    } else {
        searchTools();
    }
});


// SEARCH AI TOOLS

const toolsGrid = document.getElementById("toolsGrid");

function searchTools() {
    const query = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".tool-card");

    let found = 0;

    cards.forEach(function (card) {
        const name = card.dataset.name.toLowerCase();
        const description = card.textContent.toLowerCase();

        if (name.includes(query) || description.includes(query)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    const oldMessage = document.querySelector(".no-results");

    if (oldMessage) {
        oldMessage.remove();
    }

    if (found === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent = "No AI tools found. Try another search.";

        toolsGrid.appendChild(message);
    }
}

searchInput.addEventListener("input", searchTools);


// LIGHT AND DARK THEME

const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", function () {
    if (themeSelect.value === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});


// SUBSCRIPTION FORM

const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.checkValidity()) {
        formMessage.textContent =
            "Thank you! You have successfully subscribed.";

        formMessage.style.color = "#16a34a";

        subscribeForm.reset();
    } else {
        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#dc2626";
    }
});
