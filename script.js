"strict";

const resultContainer = document.querySelector(".result");
const userSearch = document.querySelector(".form-control");
const listItems = [];

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

      resultContainer.innerHTML = "";
      dataBooks.forEach((book) => {
        const li = document.createElement("li");
        listItems.push(li);

        li.innerHTML = `<div class="card m-4 " style="width: 14rem">
        <img class="card-img-top w-75 d-flex m-auto p-2" src="${book.volumeInfo.imageLinks.thumbnail}" alt="Card image cap" />
        <div class="card-body ">
          <h5 class="card-title"><strong>Title:</strong><br>${book.volumeInfo.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Author:</strong><br>${book.volumeInfo.authors}</li>
          <li class="list-group-item"><strong>Year published:</strong><br>${book.volumeInfo.publishedDate}</li>
          <li class="list-group-item"><strong>Rating:</strong><br>
              <!--STARS  -->
              <ul class="stars p-2 d-flex justify-content-between">
            <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></li>
              </ul>
        </ul>
        <textarea name="text" id="textarea" cols="30" rows="8"></textarea>
        <button type="button" class="btn btn-secondary btn-lg btn-block">Submit to Library</button>
      </div>`;
        resultContainer.appendChild(li);
      });
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
  }, 500);
};

userSearch.addEventListener("input", onInput);
