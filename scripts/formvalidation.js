

const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback")



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


                  
                  
                  document.getElementById('emailForm')
                  .addEventListener('submit', function(event) {
                    const emailInput = document.getElementById('email');
                    const errorMessage = document.getElementById('errorMessage');
            
                    const emailPattern = /^[a-zA-Z0-9._%+\-]+@byui\.edu$/;
            
                    if (!emailPattern.test(emailInput.value)) {
                        event.preventDefault();
                        errorMessage.style.display = 'block';
                    } else {
                        errorMessage.style.display = 'none';
                    }
                });
                




                
               // JavaScript to update the rating value display
    document.addEventListener('DOMContentLoaded', function() {
      const ratingInput = document.getElementById('pageRating');
      const ratingValueDisplay = document.getElementById('ratingValue');

      const updateRatingValue = () => {
        ratingValueDisplay.textContent = `Current Rating: ${ratingInput.value}`;
      };

      ratingInput.addEventListener('input', updateRatingValue);
      ratingInput.addEventListener('change', updateRatingValue);
    });





    function updateRating(value) {
      document.getElementById('ratingValue').textContent = value;
  }

  // Initialize display on page load
  document.addEventListener('DOMContentLoaded', (event) => {
      const ratingInput = document.getElementById('rating');
      updateRating(ratingInput.value);
  });

            
          
