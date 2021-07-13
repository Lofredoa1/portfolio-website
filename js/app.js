// Project Storage
// Main containers
const $project1 = $(".project1");
const $project2 = $(".project2");
const $project3 = $(".project3");
const $project4 = $(".project4");

// Asynchronous Request the data from our JSON file
$.ajax("./json/projects.json")
    .then((data) => {
        // Populate Project 1
        const $div = $("<div>");
        const $data1 = data[0];
        console.log($data1);
        const $git1 = $("<a>").attr("href", "https://github.com/Lofredoa1/startup-matchmaker").text("Github")
        console.log()
        $div.html(`<img class="project-image" src="${$data1.image}"/>
          <h3 class="project-title">${$data1.title}</h3>
          <p class="project-description">${$data1.description}</p>
          <span><a class="project-github">${$data1.github}</a></span>
          <span><a class="project-deployed">${$git1[0]}</a></span>`);        
        // append to the main tag
        $project1.append($div);
    console.log(data);
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