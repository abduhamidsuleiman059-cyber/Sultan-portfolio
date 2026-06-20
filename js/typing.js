const typingText = document.querySelector(".typing-text");

const texts = [
    "Building Designer",
    "Phone Technician",
    "Laptop Technician",
    "Creative Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = texts[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    if (typingText) {
        typingText.textContent = currentText.substring(0, charIndex);
    }

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();