//  -----PRELOADER SCRIPT--------

// Wait until the page is fully loaded
window.onload = function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Hide preloader and show content after delay
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust time as needed
};


// ------------TYPING EFFECT-------------

const words = ["Web Developer", "Tech Enthusiastic", "Full stack web Developer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const speed = 100;  // Typing speed
const pause = 1500; // Pause before deleting
const typerElement = document.querySelector(".typer");

function typeEffect() {
    let currentWord = words[wordIndex];
    if (isDeleting) {
        typerElement.textContent = currentWord.substring(0, letterIndex--);
    } else {
        typerElement.textContent = currentWord.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        setTimeout(() => isDeleting = true, pause);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Switch to the next word
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// --------------SEE MORE/ SEE LESS BTN ----------------

function toggleProjects() {
    let hiddenCards = document.querySelectorAll('.card.hidden');
    let visibleCards = document.querySelectorAll('.card:not(.hidden)');
    let button = document.querySelector('.see-more');

    // Number of cards to show at a time
    let batchSize = 3;

    // Check if we are expanding or collapsing
    if (hiddenCards.length > 0) {
        // Show the next batch of hidden cards (up to 3 at a time)
        for (let i = 0; i < batchSize && i < hiddenCards.length; i++) {
            hiddenCards[i].classList.remove('hidden');
        }
    } else {
        // Hide all cards except the first three
        for (let i = batchSize; i < visibleCards.length; i++) {
            visibleCards[i].classList.add('hidden');
        }
    }

    // Update button text dynamically
    let remainingHidden = document.querySelectorAll('.card.hidden').length;
    if (remainingHidden === 0) {
        button.innerHTML = 'See Less <i class="fa-solid fa-angle-up"></i>';
    } else {
        button.innerHTML = 'See More <i class="fa-solid fa-angle-down"></i>';
    }
}

// Ensure only the first three cards are visible by default
document.addEventListener("DOMContentLoaded", function () {
    let allCards = document.querySelectorAll('.card');
    let batchSize = 3;

    allCards.forEach((card, index) => {
        if (index >= batchSize) {
            card.classList.add('hidden');
        }
    });
});


// ------------------TOGGLE FOR PROJECTS/TECH STACK BTN --------------

document.getElementById("projectsBtn").addEventListener("click", function () {
    document.getElementById("projects").style.display = "flex";
    document.getElementById("techstack").style.display = "none";
    document.getElementById("seemore").style.display = "flex";
    this.classList.add("active");
    document.getElementById("techstackBtn").classList.remove("active");
});

document.getElementById("techstackBtn").addEventListener("click", function () {
    document.getElementById("techstack").style.display = "flex";
    document.getElementById("projects").style.display = "none";
    document.getElementById("seemore").style.display = "none";
    this.classList.add("active");
    document.getElementById("projectsBtn").classList.remove("active");
});

document.getElementById("projects").style.display = "flex";
document.getElementById("techstack").style.display = "none";



// ---------------------------CONNECT TEXT CHANGES------------

document.addEventListener("DOMContentLoaded", function () {
    const instagramLink = document.querySelector(".Instagram span");
    const githubLink = document.querySelector(".GitHub span");
    const linkedlink = document.querySelector(".LinkedIn span");
    const codewarLink = document.querySelector(".Codewars span");


    const originalInstagramText = instagramLink.textContent;
    const originalGithubText = githubLink.textContent;
    const originalLinkedInText = linkedlink.textContent;
    const originalcodewarText = codewarLink.textContent;

    // Change text on hover

    document.querySelector(".LinkedIn").addEventListener("mouseover", function () {
        linkedlink.textContent = "vaishnavi kundapur";
    });

    document.querySelector(".LinkedIn").addEventListener("mouseout", function () {
        linkedlink.textContent = originalLinkedInText;
    });


    document.querySelector(".Instagram").addEventListener("mouseover", function () {
        instagramLink.textContent = "@_vaishnu____";
    });
    document.querySelector(".Instagram").addEventListener("mouseout", function () {
        instagramLink.textContent = originalInstagramText;
    });

    document.querySelector(".Codewars").addEventListener("mouseover", function () {
        codewarLink.textContent = "vaishnavi-0311";
    });
    document.querySelector(".Codewars").addEventListener("mouseout", function () {
        codewarLink.textContent = originalcodewarText;
    });


    document.querySelector(".GitHub").addEventListener("mouseover", function () {
        githubLink.textContent = "vaishnavi-0311";
    });
    document.querySelector(".GitHub").addEventListener("mouseout", function () {
        githubLink.textContent = originalGithubText;
    });

});

// --------------------NAVBAR MENU--------------------------

function HamburgerMenu() {
    document.getElementById("nav-menu").classList.toggle("menu-active");
}

