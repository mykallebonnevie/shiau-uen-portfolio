// Navigation Menu Animation 

// JavaScript to toggle the menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.nav-links');

    // Show menu when clicking the hamburger icon
    hamburgerIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    // Hide menu when clicking the close icon
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinksalt = document.querySelector('.nav-links-alt');

    // Show menu when clicking the hamburger icon
    hamburgerIcon.addEventListener('click', () => {
        navLinksalt.classList.add('active');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    // Hide menu when clicking the close icon
    closeIcon.addEventListener('click', () => {
        navLinksalt.classList.remove('active');
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    });
});

// Lightbox Animation
// const images = document.querySelectorAll('img');
// const lightbox = document.getElementById('lightbox'); // Make sure you have an element with id="lightbox" in your HTML

// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active');
//         const img = document.createElement('img');
//         img.src = image.src;
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild);
//         }
//         lightbox.appendChild(img);
//     });
// });

// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return;
//     lightbox.classList.remove('active');
// });

// Repertoire Accordion
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => { 
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      faqs.forEach(otherFaq => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

