"strict";
const bookCountainer = document.querySelector(".container");
const getBookData = function (book) {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}&AIzaSyDD59y-02tEZuMaYbpLB1F5mqcqLkqlEjE`
  )
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data.items);
      const html = `<div class="card m-4" style="width: 18rem">
      <img class="card-img-top" src="${
        data.items[0].volumeInfo.imageLinks.thumbnail
      }" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Title:${data.items[0].volumeInfo.title}</h5>
        <p class="card-text">Description:${data.items[0].volumeInfo.description.substr(
          0,
          100
        )}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Author:${
          data.items[0].volumeInfo.authors
        }</li>
        <li class="list-group-item">Year publish: ${
          data.items[0].volumeInfo.publishedDate
        }</li>
        <li class="list-group-item">Rating</li>
      </ul>
    </div>`;
      console.log(data);
      bookCountainer.insertAdjacentHTML("beforeend", html);
    });
};

getBookData("the hobbit");
getBookData("the hobbit");

getBookData("harry potter");

// console.log(getBookData("harry potter"));
