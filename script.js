// Meniu mobil

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Navbar cu umbră la scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});

// Efect de apariție la scroll

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".6s";

    observer.observe(card);

});