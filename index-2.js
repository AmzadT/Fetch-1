document.addEventListener("DOMContentLoaded", function() {

    var searchButton = document.querySelector("#searchButton");
    var searchInput = document.querySelector("#searchInput");
    var movieDetails = document.querySelector("#movieDetails");
  
    searchButton.addEventListener("click", function() {

      var searchTerm = searchInput.value.trim();
  
      if (searchTerm !== "") 
      {
        var apiKey = "YOUR_API_KEY";
        var apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            displayMovieDetails(data);
          })
          .catch(error => {
            console.error("Error Fetching Movie Data:", error);
          });
      } 
      else 
      {
        alert("Please Enter A Movie Title");
      }

    });
  
    function displayMovieDetails(movieData) {

      if (movieData.Response === "True") 
      {
        var { Title, Year, Rated, Released, Runtime, Genre, Director, Plot, Poster } = movieData;
  
        var movieInfo = `
          <h2>${Title} (${Year})</h2>
          <img src="${Poster}" alt="${Title} Poster" style="max-width: 200px;">
          <p><strong>Rated:</strong> ${Rated}</p>
          <p><strong>Released:</strong> ${Released}</p>
          <p><strong>Runtime:</strong> ${Runtime}</p>
          <p><strong>Genre:</strong> ${Genre}</p>
          <p><strong>Director:</strong> ${Director}</p>
          <p><strong>Plot:</strong> ${Plot}</p>
        `;
  
        movieDetails.innerHTML = movieInfo;
      } 
      else 
      {
        movieDetails.innerHTML = "<p>Movie Not Found</p>";
      }
    }

  });
  