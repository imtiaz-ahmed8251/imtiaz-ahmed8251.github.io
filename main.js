const imtiazLink = document.querySelector('.logo'); // Adjust selector if needed
      
imtiazLink.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const header = document.getElementById('main-header');
const scrollThreshold = 100; // Adjust this value as needed

function updateHeaderClass() {
    if (window.scrollY > scrollThreshold) {
        header.classList.remove('header-initial');
        header.classList.add('header-scrolled');
    } else {
        header.classList.add('header-initial');
        header.classList.remove('header-scrolled');
    }
}

// Set initial state
updateHeaderClass();

// Update on scroll
window.addEventListener('scroll', updateHeaderClass);

// Base64 encoded PDF data (replace with your actual encoded PDF)
const pdfData = 'data:application/pdf;base64,JVBERi0xLjMKJcfs...'; // Truncated for brevity

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