const card = document.querySelector(".card");
const themeSwicher = document.querySelector("#theme");
const layoutSwicher = document.querySelector("#layout");

layoutSwicher.addEventListener("click", () => {
  card.classList.toggle("card-dir");
});

themeSwicher.addEventListener("click", () => {
  document.body.classList.toggle("theme-swich");
});
