const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b577def852msh2496ae51c66a70cp1697fcjsn7e21c1b76e17',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
	cityName.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		
		
		
		console.log(response) 

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity 
		min_temp.innerHTML= response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.inner = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset	
		
		

	})
	.catch(err => console.error(err));
}
let a = document.getElementById("submit");
a.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city1.value)
})
getWeather("kathmandu")


const option1= {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b577def852msh2496ae51c66a70cp1697fcjsn7e21c1b76e17',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=biratnagar', options)
	.then(response => response.json())
	.then((response) => {
		
		
		
		console.log(response) 

		cloud.innerHTML = response.cloud_pct
		tem.innerHTML = response.temp
		feel.innerHTML = response.feels_like
		hum.innerHTML = response.humidity 
		min.innerHTML= response.min_temp                     
	    max.innerHTML = response.max_temp
		wind.inner = response.wind_speed
		wind_d.innerHTML = response.wind_degrees
		sun.innerHTML = response.sunrise
		set.innerHTML = response.sunset	
		
		

	})
	const option2= {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b577def852msh2496ae51c66a70cp1697fcjsn7e21c1b76e17',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=birgunj', options)
		.then(response => response.json())
		.then((response) => {
			
			
			
			console.log(response) 
	
			clou.innerHTML = response.cloud_pct
			te.innerHTML = response.temp
			fee.innerHTML = response.feels_like
			hu.innerHTML = response.humidity 
			mi.innerHTML= response.min_temp                     
			mx.innerHTML = response.max_temp
			win.inner = response.wind_speed
			win.innerHTML = response.wind_degrees
			sn.innerHTML = response.sunrise
			st.innerHTML = response.sunset	
			
			
	
		})
	

			
		
 

	