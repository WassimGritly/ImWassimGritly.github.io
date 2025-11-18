document.addEventListener("DOMContentLoaded", function() {
    // Sticky Navbar & Scroll-Up Button
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        if (window.scrollY > 500) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    // Scroll-Up Button Click
    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle Menu/Navbar Script
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    const menuIcon = document.querySelector('.menu-btn i');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Typed.js Animation
    const typed = new Typed(".typing", {
        strings: ["Front-End Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Owl Carousel (keep jQuery dependency for this)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Optional: Active link highlighting using Intersection Observer
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu li a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.menu li a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    // Animate skill bars when scrolling into view
    const skillSection = document.querySelector(".column.right");
    const skillLines = document.querySelectorAll(".line");

    function animateSkills() {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight - 150; // trigger earlier

        if (sectionPos < screenPos) {
            skillLines.forEach(line => {
                const percent = line.parentElement.querySelector(".info span:last-child").textContent;
                line.style.setProperty("--percent", percent);
                line.classList.add("active");
            });
            // Remove event listener after animation
            window.removeEventListener("scroll", animateSkills);
        }
    }

    window.addEventListener("scroll", animateSkills);

	
});
