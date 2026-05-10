const trail = document.querySelector(".trail");

window.addEventListener("mousemove", (e) => {
  trail.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
});
