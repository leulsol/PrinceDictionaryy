// app.js
const apiKey = 'd60f3946-774e-4214-bb41-2a13f5f07683';

const form = document.querySelector('form');
const wordInput = document.querySelector('#word-input');
const definitionsDiv = document.querySelector('#definitions');

form.addEventListener('submit', event => {
event.preventDefault();
const word = wordInput.value.trim();
  if (!word) {
    return;
  }
const url = `https://www.dictionaryapi.com/api/v3/references/sd4/json/${word}?key=${"d60f3946-774e-4214-bb41-2a13f5f07683"`}`;
const results = data.filter(item => {
    return item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
  });
fetch(url)
    .then(response =>response.json())
    .then(data => {
      // process the data
console.log(data);
const definitions = data[0].shortdef;
      if (definitions  &definitions.length> 0) {
definitionsDiv.innerHTML = `
<h2>Definitions of ${word}:</h2>
<ul>
            ${definitions.map(def => `<li>${def}</li>`).join('')}
</ul>
        `;
      } else {
definitionsDiv.innerHTML = `<p>No definitions found for ${word}.</p>`;
      }
    })
    .catch(error => {
      // handle the error
console.error(error);
definitionsDiv.innerHTML = `<p>Failed to retrieve definitions for ${word}.</p>`;
    });
});
