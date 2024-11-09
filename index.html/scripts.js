const movieRows = document.querySelectorAll('.movie-row');

// Function to simulate loading data dynamically
function loadMovies() {
  // Example: you can dynamically add more movies or fetch data from an API
  movieRows.forEach(row => {
    for (let i = 0; i < 5; i++) {
      let img = document.createElement('img');
      // Use a placeholder image service or a different logic for different images
      img.src = `https://picsum.photos/200/300?random=${i + 1}`;
      img.alt = `Movie ${i + 1}`;
      row.appendChild(img);
    }
  });
}

// Call the function to load movies
loadMovies()