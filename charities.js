document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const city = document.getElementById('cityInput').value;
        const state = document.getElementById('stateInput').value;
        
        window.location.href = `charity_profile.html?city=${city}&state=${state}`;
    });
});