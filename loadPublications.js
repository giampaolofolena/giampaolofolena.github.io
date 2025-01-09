// Function to load publications from the JSON file
function loadPublications(project) {
    // Fetch the publication data from the JSON file
    fetch('publications.json')
        .then(response => response.json())
        .then(data => {
            const publications = data[project];  // Get the publications for the specific project
            const ul = document.getElementById(`${project}-publications`);

            // Loop through the publications and create list items
            publications.forEach(pub => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${pub.link}" target="_blank">${pub.title}</a>`;
                ul.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading publications:', error));
}

// Load the publications for the specific project
const project = document.querySelector('section').id; // Get project name from section id
loadPublications(project);
