// get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


// Get API Key by login to the Website
const API_Key='6231c6c71e2ad74a41dd6f9dd16a4eaa';
const proxy = "https://cors-anywhere.herokuapp.com/";


// Now add EventListener
button.addEventListener('click',() =>{

    //Get input Value

    const cityInput = inputTxt.value;
    
     
    // Now fetch through get API
    fetch(`${proxy}http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data =>{

         //When Fill Input Field Then Clear Input Field
        inputTxt.value=" ";
         //Now Show All Data Value

         showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°C</li>
                                </ul>
                                `; 


    });

});





