const URL = "https://api.chucknorris.io/jokes/random";
const div = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");

btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});


function displayData({ value: joke }) {
  console.log(joke);

  div.textContent = joke;
}
