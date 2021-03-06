// const api_key = 'a89b0700b3e3de04639603191d2a8a5a'
// const url = 'https://api.themoviedb.org/3/search/movie?api_key=a89b0700b3e3de04639603191d2a8a5a';


$(document).ready(() => {
    getInitialMovies();
    $(".content-main-nav-menu--search").on("keypress", setSearchQuery);
  });
  
  const getInitialMovies = async () => {
    const BASE_URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=a89b0700b3e3de04639603191d2a8a5a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1 ";
    try {
      const data = await axios.get(BASE_URL);
      
      

        let movie = "";
    for (let i = 0; i < 12; i++) {
      movie += `
      <div class="content-movies-movies-movie" onClick="setMovieToStorage(${data.data.results[i].id})">
          <a href="./page1.html"> 
            <img class="content-movies-movies-movie--img" src="https://image.tmdb.org/t/p/w500${data.data.results[i].poster_path}"
            alt="" />
          </a>
        </div>
      `;
    };
          
         
  
      $(".content-movies-movies").html(movie);
    } catch (error) {
      console.error(error);
    }
  };
  
  const setMovieToStorage = (id) => {
    sessionStorage.setItem("id", id);
  };
  
  const setSearchQuery = (event) => {
    if (event.key === "Enter") {
      sessionStorage.setItem("search", event.target.value);
      console.log(event.key," ",event.target.value)
      window.location.href = "/search.html";
    }
  };