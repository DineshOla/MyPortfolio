// Back-to-top functionality
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
});

function topFunction() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        
        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            document.querySelector(".nav-links").classList.remove("active");
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing effect
const typingText = document.getElementById("typingText");
const textArray = ["I'm a Web Developer.", "I'm a Investor."];
let textIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    typingText.textContent = currentText.substring(0, charIndex);

    if (isDeleting) {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    } else {
        charIndex++;
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 100);
        }
    }
}

window.addEventListener("load", () => setTimeout(type, 500));