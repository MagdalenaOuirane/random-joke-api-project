const URL = "https://api.chucknorris.io/jokes/random";
const div = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  console.log(joke);

  div.textContent = joke;
}
