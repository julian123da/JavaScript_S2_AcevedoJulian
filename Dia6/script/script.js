function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
         .then(Response => Response.json()) 
         .then(data => {
            done(data)
         });
    
}

getCharacters(data => {
    data.results.forEach(Personaje => {
        

       const article = document.createRange().createContextualFragment(/*html*/
       
       ´);


    });


});