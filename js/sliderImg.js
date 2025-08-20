// Image Slider functionality, I seperated this component as initializing it was conflicting with the main.js file
//I have used a simple array to store the image paths and a counter to track the current image index.
const sliderImages = [
    'images/slider_images/study1.jpg',
    'images/slider_images/study2.jpg',
    'images/slider_images/study3.jpg'
];
let index = 0;

function setImg() {
    const sliderImg = document.getElementById('sliderImg');
    if (sliderImg) {
        sliderImg.setAttribute("src", sliderImages[index]);
    }
}

function prevSlide() {
    index = (index - 1 + sliderImages.length) % sliderImages.length;
    setImg();
}

function nextSlide() {
    index = (index + 1) % sliderImages.length;
    setImg();
}

// Initialize slider on page load
window.onload = function() {
    setImg();
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
};
