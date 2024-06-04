




const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', ()=> {
                    navElement.classList.toggle('open');
                    hamburgerElement.classList.toggle('open');

})
const myButton = document.querySelector("#myBtn");

myButton.addEventListener('click', ()=> {
                    myButton.classList.toggle("dark")
                    
});
// Retrieve the visit count from local storage
let visitCount = localStorage.getItem('visitCount');

// Check if visitCount is null or undefined
if (visitCount === null || visitCount === undefined) {
    // If it is null or undefined, set it to 0
    visitCount = 0;
} else {
    // If not, parse the count from string to integer
    visitCount = parseInt(visitCount);
}

// Increment the visit count
visitCount++;

// Update the visit count in the HTML
document.getElementById('visitCount').innerText = visitCount;// Store the updated count in local storage
localStorage.setItem('visitCount', visitCount);



const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

password2.addEventListener("focusout", controlar);

function controlar(){
                    //console.log("inside the function")//
                    if (password.value !== password2.value){
                                        password.value =""
                                        password2.value =""
                                        password.focus()
                                        feedback.textContent="values Do Not Match!"
                    }
                    else{
                        feedback.textContent=""
                    }
} 
document.addEventListener('DOMContentLoaded', function() {
  const ratingInput = document.getElementById('pageRating');
  const ratingValueDisplay = document.getElementById('ratingValue');

  const updateRatingValue = () => {
    ratingValueDisplay.textContent = `Current Rating: ${ratingInput.value}`;
  };

  ratingInput.addEventListener('input', updateRatingValue);
  ratingInput.addEventListener('change', updateRatingValue);
}); 
function updateRating(value) {
  document.getElementById('ratingValue').textContent = value;
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', (event) => {
  const ratingInput = document.getElementById('rating');
  updateRating(ratingInput.value);
});













 function validateForm() {
                    const password = document.getElementById('password').value;
                    const regex = /^[A-Za-z0-9]{8,}$/;
                
                    if (!regex.test(password)) {
                      alert('password must be at least 8 characters long and contain only letters and numbers.');
                      return false;
                    }
                    return true;
                  }

const myTown =document.querySelector("#town");
const mydescription =document.querySelector("#description");
const myTemperature =document.querySelector("temperature");
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
      // displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  console.log('hello')
}













