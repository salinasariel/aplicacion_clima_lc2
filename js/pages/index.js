var selectCity = document.getElementById("ciudades");
var cities = getCitiesFromLocalStorage();

function getCitiesFromLocalStorage() { 
    let cities = localStorage.getItem("CITIES"); 
    if(cities) { 
        cities = JSON.parse(cities); 
    } else { 
        cities = []; 
    } 
    return cities; 
}

function noElements() {
    let cartelError = document.getElementById("errorNo");
    if(cities.length == 0){
        cartelError.style.display = "block";
        setInterval(function(){
            cartelError.style.display = "none";
        }, 3000);
    }
}

for (let city of cities) {
    add(city);
}

function add(city) {
    let newOption = document.createElement("option");
    newOption.value = city;
    newOption.innerHTML = city;
    selectCity.appendChild(newOption);
}

async function llamarAPI() {
    let atencion = document.getElementById("warning2");
    let cityApi = document.getElementById("ciudades").value;
    
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=090c4eb702a41d688205c62f138bd678&units=metric&lang=es`;
    try {
        result = await fetch(API);
        jsonObjet = await result.json();
    } catch (error) {
        document.getElementById("card").style.display = "none";
    } finally {
        document.getElementById("card").style.display = "block";
        atencion.style.display = "none";
        document.getElementById("city").innerHTML = jsonObjet.name;
        
        document.getElementById("temperatura").innerHTML = `Temperatura: ${jsonObjet.main.temp}°`;
        document.getElementById("sensacion").innerHTML = `Sensación térmica: ${jsonObjet.main.feels_like}°`;
        document.getElementById("humedad").innerHTML = `Humedad: ${jsonObjet.main.humidity}%`;
        document.getElementById("velocidad").innerHTML = `Velocidad del viento: ${(jsonObjet.wind.speed * 3.6).toFixed(1)}Km/h`;
        document.getElementById("presion").innerHTML = `Presión: ${jsonObjet.main.pressure} P`;
    }
}

function cerrarCruz(){
    let cerrarVentana = document.getElementById("warning2");
    cerrarVentana.style.display = "none";
}