
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
var currentDate = new Date();

// Check if there's a previous visit date stored in localStorage
var previousVisit = localStorage.getItem('lastVisit');

// If there's no previous visit date, it's the first visit
if (!previousVisit) {
  localStorage.setItem('lastVisit', currentDate);
} else {
  // Calculate the difference in milliseconds between the current and previous visit dates
  var difference = currentDate - new Date(previousVisit);

  // Convert milliseconds to days
  var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Update the sidebar content based on the time between visits
  var sidebar = document.getElementById('sidebar');
  if (daysDifference === 0) {
    sidebar.innerHTML = '<h2>Back so soon! Awesome!</h2>';
  } else {
    sidebar.innerHTML = '<h2>You last visited ' + daysDifference + (daysDifference === 1 ? ' day' : ' days') + ' ago.</h2>';
  }
}



