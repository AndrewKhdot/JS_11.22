async function getChar() {
    let url = 'https://rickandmortyapi.com/api/character/1';

    let response = await fetch(url);

    let text = await response.text();
    console.log(text);
}
getChar();
/* fetch(url)
  .then(response => response.text())
  .then(text => console.log(text)); */