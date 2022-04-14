document.querySelector('button').addEventListener('click', currentAndDailyWeather)

function currentAndDailyWeather(){
    let lat = document.getElementById('latitude').value
    let lon = document.getElementById('longitude').value

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=ae7156c2998c36a918a2e197d5e51cfa&units=imperial`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('h2').innerHTML = data.timezone
        document.querySelector('h3').innerHTML = data.current.temp + " F"
    })
    .catch(err =>{
        console.log(`err ${err}`)
    })
}