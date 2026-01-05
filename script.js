document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseEl = document.getElementById("formResponse");

  if (name && email && message) {
    responseEl.style.color = "green";
    responseEl.textContent = "Thank you! Message sent.";
    this.reset();
  } else {
    responseEl.style.color = "red";
    responseEl.textContent = "Please fill out all fields.";
  }
});
// Activate scroll animations
AOS.init({ once: true });

// Load particles.js background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js initialized');
});

// Typing animation
const typingEl = document.querySelector('.typing');
const text = typingEl.dataset.text;
let idx = 0;
function type() {
  if (idx < text.length) {
    typingEl.textContent += text[idx++];
    setTimeout(type, 80);
  }
}
type();

// Animate skill bars on scroll into view
const skillsSection = document.querySelector('#skills');
let done = false;
window.addEventListener('scroll', () => {
  if (!done && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    done = true;
    document.querySelectorAll('.skill-bar').forEach(el => {
      el.querySelector('.bar').style.width = el.dataset.value + '%';
    });
  }
});

// Modal for project details
const modal = document.getElementById('modal');
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project-card');
    modal.querySelector('#modalTitle').textContent = card.querySelector('h3').textContent;
    modal.querySelector('#modalDesc').textContent = `Details about ${card.querySelector('h3').textContent}`;
    modal.style.display = 'flex';
  });
});
document.getElementById('closeModal').addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// Contact form placeholder submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('#name').value.trim();
  const email = this.querySelector('#email').value.trim();
  const message = this.querySelector('#message').value.trim();
  if (name && email && message) {
    document.getElementById('confirmation').textContent = `Thank you, ${name}!`;
    this.reset();
  } else {
    document.getElementById('confirmation').textContent = 'Please complete all fields.';
  }
});
