document.querySelectorAll("a").forEach(link => {
  if (link.href.includes(window.location.origin)) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => window.location = link.href, 200);
    });
  }
});
