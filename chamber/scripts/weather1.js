const myTown =document.querySelector("#town");
const mydescription =document.querySelector("#description");
const myTemperature =document.querySelector("#temperature");
const myGraphic =document.querySelector("#graphic");

const myKey = "f273c8285656be320b3b07fba86f37b2"
const myLat = "-20.149619106039452"
const myLong = "28.58754956292394"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${"-20.149619106039452"}&lon=${"28.58754956292394"}&appid=${ "f273c8285656be320b3b07fba86f37b2"}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
       displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}



function displayResults(data) {
  console.log('hello')
  myTown.innerHTML= data.name;
  mydescription.innerHTML=data.weather[0].description;
  myTemperature.innerHTML= `${data.main.temp}&deg;F`
  const iconsrc =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute("SRC",iconsrc);
  myGraphic.setAttribute(alt, data.weather[0].icon)
  
}
apiFetch();


















