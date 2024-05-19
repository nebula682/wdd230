

const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback")

password2.addEventListener("focusout", controlar);

function controlar(){
                    console.log("inside the function")
                    if (password.value !== password2.value){
                                        password.value =""
                                        password2.value =""
                                        password.focus()
                                        feedback.textContent="Values Do Not Match!"
                    }
                    else{
                                        feedback.textContent =""
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


const pagerating = document.getElementById("pagerating");
const range = document.getElementById("pagerating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue(){
                    rangevalue.innerHTML =range.value;
}

