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





