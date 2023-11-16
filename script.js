//Sign Up
let containerSignup = document.getElementById("container");
let usernameSignup = document.getElementById("inputUsernameSignup");
let emailSignup = document.getElementById("inputEmailSignup");
let passwordSignup = document.getElementById("inputPasswordSignup");
let confirmPasswordSignup = document.getElementById(
  "inputConfirmPasswordSignup"
);
let checkboxTerms = document.getElementById("checkbox-Terms");

let buttonSignup = document.getElementById("button-Signup");
let massageSignup = document.getElementById("massage-Signup");

let usernameSignupValid = /^[a-zA-Z0-9]{4,25}$/;
let emailSignupValid = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;
let passwordSignupValid =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

buttonSignup.addEventListener("click", () => {
  if (
    usernameSignup.value === "" ||
    emailSignup.value === "" ||
    passwordSignup.value === "" ||
    confirmPasswordSignup.value === ""
  ) {
    massageSignup.innerHTML = "The input is Empty, please fill all inputs";
  } else if (
    usernameSignup.value != usernameSignup.value.match(usernameSignupValid)
  ) {
    massageSignup.innerHTML = "Usename is more than 4 Character";
  } else if (emailSignup.value != emailSignup.value.match(emailSignupValid)) {
    massageSignup.innerHTML = "Invalid Email";
  } else if (
    passwordSignup.value != passwordSignup.value.match(passwordSignupValid)
  ) {
    massageSignup.innerHTML =
      "Invalid Password should be 8 characters at least one of lowercase letter uppercase, number special character";
  } else if (passwordSignup.value != confirmPasswordSignup.value) {
    massageSignup.innerHTML = "Password does't match Confirm Password ";
  } else if (!checkboxTerms.checked) {
    massageSignup.innerHTML = "Please accept the Terms & condtitons to proceed";
  } else {
    let userSignup = {
      username: usernameSignup.value,
      email: emailSignup.value,
      password: passwordSignup.value,
    };

    fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignUp", {
      method: "POST",
      body: JSON.stringify({ userSignup }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(response => response.json())
      .then(json => (window.location.href = "Login.html"));
  }
});
