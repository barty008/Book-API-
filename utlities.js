"strict";

const stars = document.querySelectorAll(".fa-star");

// function map(array , starFunction){
//     const output = [];
//     for(let i =0; i < array.)
// }

function starFunction() {
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
}
starFunction();

// listItems.map(() => {
//   const stars = document.querySelectorAll(".fa-star");
//   stars.forEach((star, index) => {
//     star.addEventListener("click", () => {
//       stars.forEach((otherStar, otherIdx) => {
//         if (otherIdx <= index) {
//           otherStar.classList.add("star-hover");
//         } else if (otherIdx >= otherIdx) {
//           otherStar.classList.remove("star-hover");
//         }
//       });
//     });
//   });
//   stars.forEach((star) => {
//     star.addEventListener("dblclick", () => {
//       stars.forEach((otherStar) => {
//         otherStar.classList.remove("star-hover");
//       });
//     });
//   });
//   const listCard = `<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></li>
//       </ul>`;

//   return listItems.push(li);
// });
// document.querySelectorAll(".fa-star").innerHTML = listItems.map(
//     (el) => {
//       `<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></li>
//       </ul>`.join("");
//     }
//   );

// const list = [];
// const array = [1, 2, 32, 2, 32, 23, 5, 4, 243];

// const timeByTwo = array.map((el) => {
//   return el * 2;
// });
// console.log(timeByTwo);

// const newStarArray = listItems.map((el) => {
//   return (el.innerHTML = `Hi`);
// });
