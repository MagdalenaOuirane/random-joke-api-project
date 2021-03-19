const url = "https://api.chucknorris.io/jokes/random";
const div = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");

btn.addEventListener("click", (e) => {
  

  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText); //object
      console.log(data.value);
      div.textContent = data.value;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
});


