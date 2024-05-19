const hamburgerElement =document.querySelector('#myButton');
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







 function validateForm() {
                    const password = document.getElementById('password').value;
                    const regex = /^[A-Za-z0-9]{8,}$/;
                
                    if (!regex.test(password)) {
                      alert('password must be at least 8 characters long and contain only letters and numbers.');
                      return false;
                    }
                    return true;
                  }









