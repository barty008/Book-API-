"strict";

const getBookData = function (book) {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}&AIzaSyDD59y-02tEZuMaYbpLB1F5mqcqLkqlEjE`
  )
    .then((responce) => responce.json())
    .then((data) => console.log(data.items[0], data.items[0].volumeInfo.title));
};

getBookData("harry potter");
// console.log(getBookData("harry potter"));
