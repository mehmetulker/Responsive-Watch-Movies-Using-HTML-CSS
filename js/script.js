const arrows = document.querySelectorAll(".arrow");
const movieItems = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  let clickCount = 0;
  const imageItems = movieItems[index].querySelectorAll("img").length;
  arrow.addEventListener("click", () => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    clickCount++;
    if (imageItems - (4 + clickCount) + (4 - widthRatio) > 0) {
      movieItems[index].style.transform = `translateX(${
        movieItems[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieItems[index].style.transform = "translateX(0)";
      clickCount = 0;
    }
  });
});

//dark mode toggle
function toggleDarkMode() {
  const items = document.querySelectorAll(
    ".container, .navbar, .sidebar, .sidebar i, .toggle-ball, .toggle, .movie-list-filter select, .movie-list, .movie-item, .logo-image,.arrow,featured-content,.featured-content,.menu-toggle,.featured-title"
  );
  items.forEach((item) => item.classList.toggle("active"));
}

const toggleBall = document.querySelector(".toggle-ball");
toggleBall.addEventListener("click", toggleDarkMode);

function toggleMenu() {
  const menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("active");
}
