 // Get the current year
 var currentYear = new Date().getFullYear();

 // Insert the current year into the HTML element
 document.getElementById('copyrightYear').innerText = currentYear;





//toLocaleDateString
const date = {weekday:'long', day:'numeric',month:'long', year:'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString ('en-US', date);

const hamburgerElement =document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", ()=>{
                    navElement.classList.toggle ("open");
                    hamburgerElement.classList.toggle ("open");

});
const myBtn = document.querySelector("#myBtn")

myBtn.addEventListener("click", ()=> {
                    main.classList.toggle("dark");
}); 

document.addEventListener("DOMContentLoaded", function() {
                    var lastVisit = localStorage.getItem("lastVisit");
                    var currentDate = new Date();
                    var message;
                  
                    if (!lastVisit) {
                      message = "Welcome! Let us know if you have any questions.";
                    } else {
                      lastVisit = new Date(lastVisit);
                      var timeDiff = currentDate - lastVisit;
                      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                  
                      if (daysDiff === 0) {
                        message = "Back so soon! Awesome!";
                      } else {
                        message = "You last visited " + daysDiff + " " + (daysDiff === 1 ? "day" : "days") + " ago.";
                      }
                    }
                  
                    document.getElementById("sidebar-content").innerText = message;
                  
                    // Update lastVisit in localStorage
                    localStorage.setItem ("lastvisit", currentDate);
});

// Store the current date and time in milliseconds since January 1, 1970, 00:00:00 UTC
let currentMilliseconds = Date.now();

// Display the stored value on the webpage
document.getElementById("milliseconds").textContent = currentMilliseconds;




let gridView = true;

function toggleView() {
  gridView = !gridView;
  const container = document.getElementById('membersContainer');
  container.className = gridView ? 'grid-view' : 'list-view';
}

function fetchMembers() {
  fetch('data/members.json')
    .then(response => response.json())
    .then(data => displayMembers(data))
    .catch(error => console.error('Error fetching members:', error));
}

function displayMembers(members) {
  const container = document.getElementById('membersContainer');
  container.innerHTML = '';

  members.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member');

    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <div>
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phoneNumber}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <!-- Add other information here as needed -->
      </div>
    `;

    container.appendChild(memberCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMembers();
});




document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('banner');
  const closeBannerButton = document.getElementById('closeBanner');

  // Function to check the day of the week and display the banner accordingly
  function displayBanner() {
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
    if (today === 1 || today === 2 || today === 3) {
      banner.style.display = 'block';
    }
  }

  // Event listener for closing the banner
  closeBannerButton.addEventListener('click', function () {
    banner.style.display = 'none';
  });

  displayBanner();
});



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






















