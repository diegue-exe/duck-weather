function OpenWeather() {}



OpenWeather.prototype.getCurrentWeatherWCoords = function(lat, long) {
    var query_params = `?lat=${lat}&lon=${long}&lang=${CONFIG.lenguajeSeleccionado}&units=${CONFIG.unidades}&appid=${CONFIG.apiKey}`;
    $.get(CONFIG.url + query_params, function(forecast) {
        var result = '';
        if (forecast) {
            result += `<img src="./assets/img/icon/${CONFIG.icono}/${forecast.weather[0].icon}.png" height="50" width="50" class="mx-3"><h1>${Math.round(forecast.main.temp)} ºC</h1><p class="align-self-center mx-3">- ${forecast.weather[0].description}</p>`;
        } else {
            result = '<b>No se ha podido encontrar el tiempo de tu ciudad</b>';
        }
        
        $('#location-searchresult').html(result);
    });
};

OpenWeather.prototype.getCurrentWeatherWCity = function(city) {
    var query_params = `?q=${city}&lang=${CONFIG.lenguajeSeleccionado}&units=${CONFIG.unidades}&appid=${CONFIG.apiKey}`;
    $.get(CONFIG.url + query_params , function(forecast) {
        var result = '';
        if (forecast) {
            result += `<img src="./assets/img/icon/${CONFIG.icono}/${forecast.weather[0].icon}.png" height="50" width="50" class="mx-3"><h1>${Math.round(forecast.main.temp)} ºC</h1><p class="align-self-center mx-3">- ${forecast.weather[0].description}</p>`;
        } else {
            result = '<b>No se ha podido encontrar el tiempo de tu ciudad</b>';
        }
        
        $('#city-searchresult').html(result);
    });
};

$(function() {

    var openWeatherClient = new OpenWeather();

    $('#navLocation').on("click", function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                openWeatherClient.getCurrentWeatherWCoords(position.coords.latitude, position.coords.longitude);
            });
        } else { 
            console.log("Geolocation is not supported by this browser.");
        }
    });

    $('#search-city').on('click', function() {
        var city = $('#input-city').val()
        openWeatherClient.getCurrentWeatherWCity(city);
    });

   
});