
// =====================================
// MOBILE NAVIGATION
// =====================================

// Select menu button
const menuToggle = document.getElementById("menuToggle");

// Select navigation links
const navLinks = document.getElementById("navLinks");


// Menu button click event

menuToggle.addEventListener("click", function () {

    // Toggle active class
    navLinks.classList.toggle("active");

    // Check menu state
    const isOpen = navLinks.classList.contains("active");

    // Update accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update button label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// Close menu when a navigation link is clicked

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// Close menu with Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
