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
