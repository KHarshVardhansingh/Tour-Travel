let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
  
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    setInterval(nextSlide, 3000); 
});

const vehicleMenu = document.querySelector('.dropbox');
const vehicleLink = document.querySelector('.nav li:nth-child(5)');

vehicleLink.addEventListener('mouseover', () => {
    vehicleMenu.style.display = 'block';
});

vehicleLink.addEventListener('mouseout', () => {
    vehicleMenu.style.display = 'none';
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

const themeButton = document.createElement('button');
themeButton.textContent = "Toggle Dark Mode";
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Booking button click alert
document.querySelectorAll(".book-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for choosing Wanderlust Travels! Our team will contact you shortly.");
  });
});
