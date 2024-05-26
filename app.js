const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imgitem = movielists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imgitem - (4 + clickCounter)  >= 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 330
      }px)`;
    } else {
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
/!* dark mode*!/;
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

function toggleActiveClass(elements) {
  elements.forEach((element) => element.classList.toggle("active"));
}

// in your event listener
toggleActiveClass(items);

ball.onclick = function () {
  toggleActiveClass(items);
};
// or if you prefer event delegation
