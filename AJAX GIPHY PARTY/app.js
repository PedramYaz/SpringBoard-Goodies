console.log("Let's get this party started!");
const $gifArea = $("#gifarea");
const $search = $("#search");

// function addGif(results) {
//   let numResults = results.data.length;
//   if (numResults) {
//     let $newGif = $("<img>");
//     $gifArea.append($newGif);
//   }
// }

function addGif(results) {
  let numResults = results.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    let $newGif = $("<img>", {
      src: results.data[randomIndex].images.original.url,
    });
    $gifArea.append($newGif);
  }
}

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchName = $search.val();
  $search.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchName, key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  addGif(response.data);
});

const remove = document.querySelector("#remove");
remove.addEventListener("click", function () {
  $gifArea.empty();
});
