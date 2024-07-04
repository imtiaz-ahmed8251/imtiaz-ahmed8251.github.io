document.addEventListener('DOMContentLoaded', function() {
    const imtiazLink = document.querySelector('.logo');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const header = document.getElementById('main-header');
    let isMenuOpen = false;

    console.log('Menu toggle:', menuToggle);
    console.log('Nav UL:', navUl);

    // Smooth scroll to top when logo is clicked
    imtiazLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scroll for all links with hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        navUl.classList.toggle('show');
        document.body.classList.toggle('menu-open');
        console.log('Menu open:', isMenuOpen);
    });


    // Close menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
            document.body.classList.remove('menu-open');
            isMenuOpen = false;
        });
    });
    });

    // Handle scroll
    function updateHeaderClass() {
        if (window.scrollY > 50) {
            header.classList.remove('header-initial');
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('header-initial');
        }
        
        // Ensure menu stays visible if it's open
        if (isMenuOpen) {
            navUl.style.display = 'flex';
        }
    }

    // Set initial state and update on scroll
    updateHeaderClass();
    window.addEventListener('scroll', updateHeaderClass);

// Resume handling
function handleResume() {
    // Try to open the PDF in a new tab
    window.open('Resume/Imtiaz_Ahmed_DA_Resume.pdf', '_blank');
    
    // Show the modal with alternative options
    showResumeModal();
}

function showResumeModal() {
    const modal = document.getElementById('resumeModal');
    modal.style.display = 'block';

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}