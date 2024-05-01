// Use the DOM method `.getElementById()` to find your form
let form = document.getElementById('myForm')
const button = document.getElementById('submit')

// 
const validateForm = (e) => {
  // Get the form elements
 // e.preventDefault();

  let elements = document.getElementById('myForm').elements;
  

  // Create your for loop
  for (let i = 0; i < elements.length; i++) {
    console.log("this is the value of i: " + i);

    console.log(elements[i]);
  }
}

// Add the an event listener to validate your form
button.addEventListener('submit', validateForm)