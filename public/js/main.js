const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const getInfo = async (event) => {
    event.preventDefault();
    const cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = 'Plz write the name before search';
    } else {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=dd41d5b6c68e1412e34ebbdaf48f748e";
        const response = await fetch(url);
        const data = await response.json();
        // Use the `data` variable to extract the weather data
    }
}

submitBtn.addEventListener('click', getInfo);