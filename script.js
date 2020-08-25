// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// 9157fa472ab54f0fd991ab493855aecf
alert('rahul');




    
document.querySelector('#city').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      var name=e.target.value;
      console.log(name);
    //   var url='https://api.openweathermap.org/data/2.5/weather?id=' + name+ '&appid=9157fa472ab54f0fd991ab493855aecf';
    showResult(name);
    
    }
})

   
function showResult(name){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9157fa472ab54f0fd991ab493855aecf`)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      showWeather(data);
    })
    .catch(function() {
      console.log(err);// catch any errors
    });

    // document.querySelector('h2').innerHTML=data.name;
}
function showWeather(data){
    console.log(data.name);
    document.querySelector('h2').innerHTML=data.name + ' ('+data.sys.country+')';
    console.log(data.sys.country);
    document.querySelector('p').innerHTML=new Date();
    document.querySelector('h1').innerHTML=Math.floor(data.main.temp-273)+'°C';
    document.querySelector('.min-max').innerHTML=Math.floor(data.main.temp_min-273)+'°C(min)/'+Math.floor(data.main.temp_max-273)+'°C(max)';
    document.querySelector('h5').innerHTML=data.weather[0].main;// weather[0].main
    var iconName=data.weather[0].icon;
    document.querySelector('.icons').setAttribute("src","http://openweathermap.org/img/wn/"+iconName+"@2x.png");

    var conditions =data.weather[0].main;
    if(conditions==="Rain"){
        document.querySelector('body').style.background='url("rain.jpg")';
    }
    else if(conditions==="Haze"){
        document.querySelector('body').style.background='url("Haze.jpeg")';
    }
    else if(conditions==="Clear"){
        document.querySelector('body').style.background='url("clear2.jpeg")';
    }
    if(conditions==="Clouds"){
        document.querySelector('body').style.background='url("clouds.jpeg")';
    }
    if(conditions==="Snow"){
        document.querySelector('body').style.background='url("snow.jpg")';
    }
    if(conditions==="Thunderstorm"){
        document.querySelector('body').style.background='url("thunderstorm.jpg")';
    }
    if(conditions==="Sunny"){
        document.querySelector('body').style.background='url("sunny.jpeg")';
    }
    if(conditions==="Mist"){
        document.querySelector('body').style.background='url("mist2.jpg")';
    }
    }

  


