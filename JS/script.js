const api_key = 'a89b0700b3e3de04639603191d2a8a5a'
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a89b0700b3e3de04639603191d2a8a5a';


const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');

function movieSection(movies){
    return movies.map((movie) => {
        return `

        <img src =${ movie.poster_path} data-movie-id=${movie.id}/>;
`;
    })}


function createMovieContainer(movies){
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');
   
    const movieTemplate = `
    <section class = "section">
    $ {movieSelection(movies)}
    </section>
      <div class="content">
      <p id ="content-close">Close</p>
           
      </div>
       `;   
    movieElement.innerHTML = movieTemplate;
    return  movieElement;
    
    
    }



buttonElement .onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    
    const newUrl = url + '&query=' + value;

    fetch(newUrl)
         .then ((res) => res.json())
         .then ((data) => { 
            const movies = data.results;
            const movieBlock = createMovieContainer (movies);
            movieSearchable.appendChild(movieBlock);
             console.log ('Data:' ,  data);
             
         } )
         .catch ((error) => {
             console.log ('Error:',error);
         });
     console.log('Value:', value);
}
