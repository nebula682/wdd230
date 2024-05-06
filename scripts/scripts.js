const hamburgerElement =document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', ()=> {
                    navElement.classList.toggle('open');
                    hamburgerElement.classList.toggle('open');

})
const myButton = document.querySelector("#myBtn")

myButton.addEventListener('click', ()=> {
                    main.classList.toggle("dark");
});