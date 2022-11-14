class  RickAndMorty {
    async getCharacter(x) {
        let url = 'https://rickandmortyapi.com/api/character/';
        url = url + x;
        let response = await fetch(url);
    
        let json = await response.json();
        return json;
    }   
}

async function getChar() {
    let url = 'https://rickandmortyapi.com/api/character/1';

    let response = await fetch(url);

    let text = await response.text();
    console.log(text);
}
getChar();
let rm = new RickAndMorty();
rm.getCharacter(2);
let ob = rm.getCharacter(2);
/* fetch(url)
  .then(response => response.text())
  .then(text => console.log(text)); */