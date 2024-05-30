 // Get the current year
 var currentYear = new Date().getFullYear();

 // Insert the current year into the HTML element
 document.getElementById('copyrightYear').innerText = currentYear;





//toLocaleDateString
const date = {weekday:'long', day:'numeric',month:'long', year:'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString ('en-US', date);
