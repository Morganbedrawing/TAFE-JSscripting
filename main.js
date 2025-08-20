//this is the main JavaScript file for the website
// It handles the hamburger menu toggle functionality and the slide-out search bar.

//this component handles the hamburger menu toggle functionality if js is disabled (no-js class)
//reference https://stackoverflow.com/questions/6724515/what-is-the-purpose-of-the-html-no-js-class
document.body.classList.remove('no-js');
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    var nav = document.getElementById('mainNav');
    nav.classList.toggle('nav-open');
    nav.classList.toggle('nav-collapsed');
});


// Slide-out search bar which I'm reusing from the frontend development assignment. 

const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');

if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        searchBar.classList.toggle('open');
        if (searchBar.classList.contains('open')) {
            searchBar.querySelector('input').focus();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") searchBar.classList.remove('open');
    });
    // Close search bar when clicking outside
    document.addEventListener('click', (e) => {
        if (searchBar.classList.contains('open') && !searchBar.contains(e.target) && e.target !== searchToggle) {
            searchBar.classList.remove('open');
        }
    });
}


