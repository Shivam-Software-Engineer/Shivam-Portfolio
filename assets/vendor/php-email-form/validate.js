document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");

  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Default form submission roko
          console.log("Form Submitted!"); // Console me message print karein

          let formData = new FormData(form);

          fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  console.log("Email Sent Successfully!");
                  form.reset(); // Form ko reset karein
              } else {
                  console.log("Error sending email!", data);
              }
          })
          .catch(error => {
              console.log("Something went wrong!", error);
          });
      });
  } else {
      console.log("Form not found! Check your HTML.");
  }
});
