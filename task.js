// Function for Buy Now button
function buyNow() {
  alert("Thank you for your interest!");
}

// Function to change welcome text
function changeText() {
  document.getElementById("welcomeText").innerText =
    "This text was changed using JavaScript!";
}

// Dark/Light mode toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Form validation function
function validateForm() {
  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Check if fields are empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill all the fields before submitting!");
    return false; // Stop form submission
  } else {
    alert("Form submitted successfully!");
    return true; // Allow form submission
  }
}