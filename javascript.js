
document.addEventListener("DOMContentLoaded", function () {

 
  // BUTTON CLICK INTERACTION
 
  let buyButton = document.querySelector("button"); 
  let buyMessage = document.createElement("p");
  buyButton.after(buyMessage);

  buyButton.addEventListener("click", function () {
    buyMessage.innerText = "Thank you for your interest! Our team will contact you soon.";
  });

 
  // FORM VALIDATION
 
  let form = document.getElementById("contactForm");
  let formMsg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        formMsg.innerText = "Please fill all the fields before submitting.";
      } else {
        formMsg.innerText = "Form submitted successfully!";
      }
    });
  }

 
  // DYNAMIC BEHAVIOR (HEADER COLOR ON SCROLL)
 
  let header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.style.backgroundColor = "#d4af37"; // gold color
    header.style.color = "black";
  });

});
