"strict";
const bookCountainer = document.querySelector(".container");

const userSearch = document.querySelector(".form-control");

async function getBookData(book) {
  const responce = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}&AIzaSyDD59y-02tEZuMaYbpLB1F5mqcqLkqlEjE`,
    {
      orderBy: "newest",
    }
  )
    .then((responce) => responce.json())
    .then((data) => {
      const dataBooks = data.items;
      for (let book of dataBooks) {
        // ADDING CARD TO HTML

        const html = `<div class="container ">
        <div class="row d-flex  ">
          <div class="col ">
            <div class="card m-4 " style="width: 18rem">
              <img class="card-img-top" src="${
                book.volumeInfo.imageLinks.thumbnail
              }" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Title: ${book.volumeInfo.title}</h5>
                <p class="card-text">Description: ${book.volumeInfo.description.substr(
                  0,
                  100
                )}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Author: ${
                  book.volumeInfo.authors
                }</li>
                <li class="list-group-item">Year publish: ${
                  book.volumeInfo.publishedDate
                }</li>
                <li class="list-group-item">Rating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;

        bookCountainer.insertAdjacentHTML("beforeend", html);
        console.log(data);
      }
    });
}

userSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getBookData(e.target.value);
  }
});

let timoutId;
const onInput = (e) => {
  if (timoutId) {
    clearTimeout(timoutId);
  }
  timoutId = setTimeout(() => {
    getBookData(e.target.value);
  }, 1000);
};

userSearch.addEventListener("input", onInput);

// const input = async (event) => {
//   const books = await getBookData(event.target.value);
//   for (let book of books) {
//     console.log(book);
//   }
// };
