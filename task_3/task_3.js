class  RickAndMorty {
    async getCharacter(x) {
        let url = 'https://rickandmortyapi.com/api/character/';
        url = url + x;
        fetch(url)
        .then(response.ok ? response: new Error(response.status) )
        .then(response => response.json())
        .catch(alert(err));
    }   

    async getEpisode(x) {
        let url = 'https://rickandmortyapi.com/api/episode/';
        url = url + x;
        try {
            let response = await fetch(url);
            if(response.ok) {
                let json =  await response.json();
                return await json;
            }
            else {
                throw await new Error(response.status);
            }
        }   
        catch(err){
            alert(err);
        }
        
      
    }  
}
let rm = new RickAndMorty();
rm.getCharacter(1);

