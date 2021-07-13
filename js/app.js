// Project Storage
// Save the Main element in a variable
  const $project1 = $("project1");

  // Asynchronous Request the data from our JSON file
  $.ajax("./json/projects.json")
    // specify what to do with data once request is completed (... and then...)
    .then((data[0]) => {
        const $div = $("<div>");
        // generate the html we want in each div with that movies data
        $div.html(`<img class="project-image" src="${image}"/>
          <h2 class="project-title">${title}</h2>
          <p class="project-description">${description}</p>`);
        // append to the main tag
        $project1.append($div);
      
    //     // Loop over the data since it is an array
    //   data.forEach((movie) => {
    //     // create a new div to hold the movie
    //     const $div = $("<div>");
    //     // generate the html we want in each div with that movies data
    //     $div.html(`<h2 class="movie-title">${movie.title}</h2>
    //       <h3 class="movie-release">${movie.release_year}</h3>
    //       <img class="movie-image" src="${movie.image}"/>`);
    //     // append to the main tag
    //     $main.append($div);
      });
    });




// Formspree code from Fromspree

let form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("my-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)