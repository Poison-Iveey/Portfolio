const buttons = document.querySelectorAll(".stack-toggle button");
const stacks = document.querySelectorAll(".stack-grid");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    stacks.forEach(s => s.classList.remove("show"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("show");
  });
});
