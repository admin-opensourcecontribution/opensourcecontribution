// Fetch the current year and display it in the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
// async function searchGitHub() {
//     const query = document.getElementById('searchQuery').value;
//     const token = " "; // Add your GitHub Token here for authenticated requests

//     if (!query) {
//       document.getElementById('results').innerHTML = '<p>Please enter a search query.</p>';
//       return;
//     }

//     try {
//       const response = await fetch(`https://api.github.com/search/repositories?q=${query}`, {
//         headers: {
//           'Authorization': `token ${token}`
//         }
//       });
//       const data = await response.json();

//       if (data.items.length === 0) {
//         document.getElementById('results').innerHTML = '<p>No results found.</p>';
//         return;
//       }

//       // Display the results
//       let output = '<ul>';
//       data.items.forEach(repo => {
//         output += `<li>
//           <a href="${repo.html_url}" target="_blank">${repo.name}</a>
//           <span class="stars">⭐ ${repo.stargazers_count}</span>
//         </li>`;
//       });
//       output += '</ul>';

//       document.getElementById('results').innerHTML = output;
//     } catch (error) {
//       console.error('Error:', error);
//       document.getElementById('results').innerHTML = '<p>There was an error fetching the data.</p>';
//     }
//   }