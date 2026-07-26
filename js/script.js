/*
======================================================
Blue Arc Electrical
Main Javascript
======================================================
*/

/* ==========================================
Sticky Navigation
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
Smooth Fade In
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================================
Button Hover Glow
========================================== */

document.querySelectorAll(".btn-primary").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow = "0 0 35px rgba(30,144,255,.45)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "";

    });

});