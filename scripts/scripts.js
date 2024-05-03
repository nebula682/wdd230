const hamburgerElement =document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', ()=> {
                    navElement.classList.toggle('open');
                    hamburgerElement.classList.toggle('open');

})
const myBtn = document.querySelector("#myBtn")

myBtn.addEventListener("click", ()=> {
                    myBtn.classList.toggle("dark");
});