const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const topBtn = document.getElementById("topBtn");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();
