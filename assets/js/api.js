const URL = 'https://api.unsplash.com/search/photos/?query=tea-leaves&client_id=QSz12piqsEZKwy7mseJIbTRYnc6SD1WgF91DNS7wp70';

const get_image_button = document.querySelector('.get_image_button');

const image_to_display = document.querySelector('.image_to_display');
//When the button is clicked call getNewImage funtion 
get_image_button.addEventListener('click', async () => {

    fetch(URL)
    .then(function (response){

        console.log("show me the data");
        console.log(response)
        console.log("i am an android, lieutenant data");
        
        return response.json();
        
    })
    .then(function (jsonData) {

        image_to_display.src = jsonData.results.urls.raw;

    })

})









//get a random number between 1 and 10 get the data and wait 
//then one it has the data use the random number to pick an image