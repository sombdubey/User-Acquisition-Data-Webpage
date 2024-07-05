// script.js

async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const userDataDiv = document.getElementById('userData');
        
        // Create a formatted display for the data
        let content = '<h2>Data:</h2>';
        content += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';

        userDataDiv.innerHTML = content;
    } catch (error) {
        console.error('Error fetching data:', error);
        const userDataDiv = document.getElementById('userData');
        userDataDiv.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
}

fetchData();
