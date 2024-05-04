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
