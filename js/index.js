document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".more-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;

      details.classList.toggle("hidden");

      btn.textContent = details.classList.contains("hidden")
        ? "More"
        : "Less";
    });
  });
});
