const Key = "e303eaf5";
let movieID = new URLSearchParams(window.location.search).get("movieId");

function searchFilmById() {
    fetch("http://www.omdbapi.com/?apikey=" + Key + "&i=" + movieID)
        .then(res => res.json())
        //.then(json => console.log(json));
        .then(json => displaySpecificMovie(json));

}

function displaySpecificMovie(movie) {
        console.log(movie);


    

        let container = document.createElement("div");

        let title = document.createElement("h1");
        title.innerText = movie.Title;
        container.appendChild(title);
        

        let imgStore = document.createElement("div");
        container.appendChild(imgStore);

        let poster = document.createElement("img");
        poster.src = movie.Poster;
        imgStore.appendChild(poster);

        let bodyStore = document.createElement("div");
        container.appendChild(bodyStore);



        let type = document.createElement("p");
        type.innerText = "Type: " + movie.Type;
        let year = document.createElement("p");
        year.innerText = "Year: " + movie.Year;
        let Runtime = document.createElement("p");
        Runtime.innerText = "Runtime: " + movie.Runtime;
        let Genre = document.createElement("p");
        Genre.innerText = "Genre: " + movie.Genre;
        let Actors = document.createElement("p");
        Actors.innerText = "Actors: " + movie.Actors;
        let Director = document.createElement("p");
        Director.innerText = "Director: " + movie.Director;
        let Plot = document.createElement("p");
        Plot.innerText = "Plot: " + movie.Plot;



        ratings...
        imdbRating: "7.0"
      
      
Actors: "Tom Cruise, Rosamund Pike, Richard Jenkins, David Oyelowo"
Director: "Christopher McQuarrie"
Plot: "A homicide investigator digs deep...."
Rated: "PG-13"



        main.appendChild(container);
    


}
