const URL = "https://api.chucknorris.io/jokes/random";
const div = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");

btn.addEventListener("click", () => {
    console.log('click')
  getData(URL)
  
    .then((response) => displayData(response))

    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200){
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(objData) {
   
  const { value } = JSON.parse(objData);
  div.textContent = value;
  console.log(div.textContent)
}
