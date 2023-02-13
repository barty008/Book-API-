"strict";
const stars = document.querySelectorAll(".fa-star");

const allStars = stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= index) {
        otherStar.classList.add("star-hover");
      } else if (otherIdx >= otherIdx) {
        otherStar.classList.remove("star-hover");
      }
    });
  });
});
