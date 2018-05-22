
function initpage(){
fetch("https://ipapi.co/json")
  .then(response => response.json())

  .then(function(myJson){
  	var country = document.createTextNode(myJson.country);
    var countryname = document.createTextNode(myJson.country_name);
    var region = document.createTextNode(myJson.region);
    var city = document.createTextNode(myJson.city);
    var postal = document.createTextNode(myJson.postal);
    var latitude = document.createTextNode(myJson.latitude);
    var longitude = document.createTextNode(myJson.longitude);
    var ip = document.createTextNode(myJson.ip);



    document.querySelector("#landcode").append(country);
    document.querySelector("#land").append(countryname);
    document.querySelector("#regio").append(region);
    document.querySelector("#stad").append(city);
    document.querySelector("#postcode").append(postal);
    document.querySelector("#latitude").append(latitude);
    document.querySelector("#longitude").append(longitude);
    document.querySelector("#ip").append(ip);


    weatherInfo(myJson.city);
    loadCountries();
 
  });
}
function weatherInfo(city){
	

	    if(window.localStorage.getItem(city) != null && JSON.parse(window.localStorage.getItem(city)).name === city && JSON.parse(window.localStorage.getItem(city)).time > new Date().getTime()){
	        
	    	var weerdata = JSON.parse(window.localStorage.getItem(city));

	        console.log("INFORMATIE LOCALSTORAGE");
	        var sunriseM = new Date((weerdata.sys.sunrise) * 1000);
	        var sunsetM = new Date((weerdata.sys.sunset) * 1000);

	        var sunset = sunsetM.getHours() + ":" + sunsetM.getMinutes() + ":" + sunsetM.getSeconds();
	        var sunrise = sunriseM.getHours() + ":" + sunriseM.getMinutes() + ":" + sunriseM.getSeconds();

	        var temperatuur = (weerdata.main.temp - 273.15).toFixed(1);

	        document.querySelector("#temperatuur").innerHTML = temperatuur;
	        document.querySelector("#luchtvochtigheid").innerHTML = weerdata.main.humidity;
	        document.querySelector("#windsnelheid").innerHTML = weerdata.wind.speed;
	        document.querySelector("#windrichting").innerHTML = weerdata.wind.deg;
	        document.querySelector("#zonsopgang").innerHTML = sunrise;
	        document.querySelector("#zonsondergang").innerHTML = sunset;
	        document.querySelector("#h2").innerHTML = "Het weer in " + weerdata.name;

	    }else{
	fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=208f85213b9c300d1b445708c11a9d80")
	        .then(response => response.json())
	        .then(function(weerdata) {
	        console.log("INFORMATIE FETCH");

	        weerdata["time"] = new Date().getTime() + 10000;
	        console.log(weerdata["time"]);
	        window.localStorage.setItem(city, JSON.stringify(weerdata));
	        var sunriseM = new Date((weerdata.sys.sunrise) * 1000);
	        var sunsetM = new Date((weerdata.sys.sunset) * 1000);

	        var sunset = sunsetM.getHours() + ":" + sunsetM.getMinutes() + ":" + sunsetM.getSeconds();
	        var sunrise = sunriseM.getHours() + ":" + sunriseM.getMinutes() + ":" + sunriseM.getSeconds();

	        var temperatuur = (weerdata.main.temp - 273.15).toFixed(1);

	        document.querySelector("#temperatuur").innerHTML = temperatuur;
	        document.querySelector("#luchtvochtigheid").innerHTML = weerdata.main.humidity;
	        document.querySelector("#windsnelheid").innerHTML = weerdata.wind.speed;
	        document.querySelector("#windrichting").innerHTML = weerdata.wind.deg;
	        document.querySelector("#zonsopgang").innerHTML = sunrise;
	        document.querySelector("#zonsondergang").innerHTML = sunset;
	        document.querySelector("#h2").innerHTML = "Het weer in " + weerdata.name;
	        });
	    }
	}


function loadCountries(){
   fetch("restservices/countries/")
    .then(response => response.json())

    .then(function(landen){

      for( const land of landen){
        var row = document.createElement("tr");
        	row.className = "hoofdstad";

        row.setAttribute("id", land.capital);
        row.addEventListener("click",function(){
        	weatherChange(this.id);
        	weatherInfo(this.id);
          
        });



        var countryColumn = document.createElement("td");
        var countryText = document.createTextNode(land.countries);
        countryColumn.appendChild(countryText);
        row.appendChild(countryColumn);

        var capitalColumn = document.createElement("td");
        var capitalText = document.createTextNode(land.capital);
        capitalColumn.appendChild(capitalText);
        row.appendChild(capitalColumn);

        var regionColumn = document.createElement("td");
        var regionText = document.createTextNode(land.regio);
        regionColumn.appendChild(regionText);
        row.appendChild(regionColumn);

        var surfaceColumn = document.createElement("td");
        var surfaceText = document.createTextNode(land.surface);
        surfaceColumn.appendChild(surfaceText);
        row.appendChild(surfaceColumn);

        var populationColumn = document.createElement("td");
        var populationText = document.createTextNode(land.populatie);
        populationColumn.appendChild(populationText);
        row.appendChild(populationColumn);

        document.querySelector("#countryList").appendChild(row);

      }
    })
}

function weatherChange(city){
	 var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d6aa861e299de982958d6d096764a496";
	  fetch(url)
	    .then(response => response.json())

	    .then(function(myJson){

	      var sunset1 = new Date((myJson.sys.sunset) * 1000);
	      var sunrise1 = new Date((myJson.sys.sunrise )* 1000);

	      var sunset = sunset1.getHours() + ":" + sunset1.getMinutes() + ":" + sunset1.getSeconds();
	      var sunrise = sunrise1.getHours() + ":" + sunrise1.getMinutes() + ":" + sunrise1.getSeconds();

	  
	      document.querySelector("#temperatuur").innerHTML= myJson.main.temp - 273 ;
	      document.querySelector("#luchtvochtigheid").innerHTML= myJson.main.humidity;
	      document.querySelector("#zonsopgang").innerHTML=sunset;
	      document.querySelector("#zonsondergang").innerHTML= sunrise;
	      document.querySelector("#windrichting").innerHTML=myJson.wind.deg;
	      document.querySelector("#windsnelheid").innerHTML=myJson.wind.speed;
	      
	      document.querySelector("#h2").innerHTML = "Het weer in "  + city;
	      
	  })
}






console.log(localStorage);

initpage();
