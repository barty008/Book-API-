"strict";

const stars = document.querySelectorAll(".fa-star");

stars.forEach((star, index) => {
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
stars.forEach((star) => {
  star.addEventListener("dblclick", () => {
    stars.forEach((otherStar) => {
      otherStar.classList.remove("star-hover");
    });
  });
});
