
for(let i = 1; i <= 17; i++){
fetch("https://api.unsplash.com/search/photos/?query=tea-leaves&client_id=QSz12piqsEZKwy7mseJIbTRYnc6SD1WgF91DNS7wp70")
    .then(res => res.json())
    .then(data => {
    let randomNumber = Math.floor(Math.random() * 10); 
    let images = data.results[randomNumber];
    console.log(images.urls.regular)
    let randomImage = images.urls.full;

    let tea = document.createElement("div");
    tea.classList.add("tea");
    let tea_grid = document.querySelector('.tea_grid'); 
    let image = document.createElement("div");
    image.classList.add("image");
    image.style.backgroundImage = `url(${randomImage})`;
    tea.append(image)
    console.log(tea)
    tea_grid.append(tea)


    
    });
};
