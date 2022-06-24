const URL = 'https://api.unsplash.com/search/photos/?query=tea-leaves&client_id=QSz12piqsEZKwy7mseJIbTRYnc6SD1WgF91DNS7wp70';

const get_image_button = document.querySelector('.get_image_button');

const image_to_display = document.querySelector('.image_to_display');
//When the button is clicked call getNewImage funtion 
get_image_button.addEventListener('click', async () => {

    let randomImage = await getNewImage();
    image_to_display.src = randomImage;
    
 
        
})


const getNewImage = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
      });
  }
//get a random number between 1 and 10 get the data and wait 
//then one it has the data use the random number to pick an image