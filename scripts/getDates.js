//toLocaleDateString
const date = {weekday:'long', day:'numeric',month:'long', year:'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString ('en-US', date);

const hamburgerElement =document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", ()=>{
                    navElement.classList.toggle ("open");
                    hamburgerElement.classList.toggle ("open");

});