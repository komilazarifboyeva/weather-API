let cities = document.getElementById('cities');
let tem = document.getElementById('tem');
let cloud = document.getElementById('cloud');
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let card = document.querySelector('.card')
let lod = document.querySelector('.lod');
let loader = document.querySelector('.loader');

btn.addEventListener('click',()=>{
    let city = inp.value
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        lod.classList.remove('hidden')
        loader.classList.remove('hidden')

        if(request.readyState == 4){
            let data = JSON.parse(request.responseText);
            console.log(data);

            let cityName = data.name;
            let cloudInfo = data.weather[0].description;
            let temprature = data.main.temp;

            cities.textContent = cityName;
            tem.textContent = `${Math.floor(temprature)} ℃`
            cloud.textContent = cloudInfo;
            
            lod.classList.add('hidden')
            loader.classList.add('hidden')

        }
        card.classList.remove('hidden');
    })

    request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69a0b1325b160144e234eb5f377d68b6&units=metric`)
    request.send();
})