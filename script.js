// Event Handling
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => alert("Button Clicked!"));

const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => hoverText.style.color = "green");
hoverText.addEventListener("mouseout", () => hoverText.style.color = "black");

const keypressInput = document.getElementById("keypressInput");
keypressInput.addEventListener("keypress", (e) => console.log(`You pressed ${e.key}`));

const secretBtn = document.getElementById("secretBtn");
secretBtn.addEventListener("dblclick", () => alert("Secret double click action!"));

// Interactive Elements
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => colorBtn.style.backgroundColor = "#28a745");

const images = [
  "https://via.placeholder.com/300/ff0000",
  "https://via.placeholder.com/300/00ff00",
  "https://via.placeholder.com/300/0000ff"
];
let imgIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const nextImg = document.getElementById("nextImg");
nextImg.addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  galleryImg.src = images[imgIndex];
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// Form Validation
const form = document.getElementById("myForm");
const feedback = document.getElementById("formFeedback");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  
  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = "Invalid email format.";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
  }
});
