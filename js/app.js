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
        const $div1 = $("<div>");
        const $data1 = data[0];
        $div1.html(`<img class="project-image" src="${$data1.image}"/>
          <h3 class="project-title">${$data1.title}</h3>
          <p class="project-description">${$data1.description}</p>
          <span><a href=${$data1.github} class="project-github">Github</a></span>
          <span><a href=${$data1.deployed} class="project-deployed">Deployed</a></span>`);        
        // append to the main tag
        $project1.append($div1);
        // Populate Project 2
        const $div2 = $("<div>");
        const $data2 = data[1];
        $div2.html(`<img class="project-image" src="${$data2.image}"/>
          <h3 class="project-title">${$data2.title}</h3>
          <p class="project-description">${$data2.description}</p>
          <span><a href=${$data2.github} class="project-github">Github</a></span>
          <span><a href=${$data2.deployed} class="project-deployed">Deployed</a></span>`);        
        // append to the main tag
        $project2.append($div2);
        // Populate Project 3
        const $div3 = $("<div>");
        const $data3 = data[2];
        $div3.html(`<img class="project-image" src="${$data3.image}"/>
          <h3 class="project-title">${$data3.title}</h3>
          <p class="project-description">${$data3.description}</p>
          <span><a href=${$data3.github} class="project-github">Github</a></span>
          <span><a href=${$data3.deployed} class="project-deployed">Deployed</a></span>`);        
        // append to the main tag
        $project3.append($div3);
        // Populate Project 4
        const $div4 = $("<div>");
        const $data4 = data[3];
        $div4.html(`<img class="project-image" src="${$data4.image}"/>
          <h3 class="project-title">${$data4.title}</h3>
          <p class="project-description">${$data4.description}</p>
          <span><a href=${$data4.github} class="project-github">Github</a></span>
          <span><a href=${$data4.deployed} class="project-deployed">Deployed</a></span>`);        
        // append to the main tag
        $project4.append($div4);

        // Carousel layout
        
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