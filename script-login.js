let containerLogin = document.getElementById("container");
let emailLogin = document.getElementById("inputEmailLogin");
let passwordLogin = document.getElementById("inputPasswordLogin");
let massageLogin = document.getElementById("massage-Login");
let buttonLogin = document.getElementById("button-Login");

buttonLogin.addEventListener("click", () => {
  if (emailLogin.value === "" || passwordLogin.value === "") {
    massageLogin.innerHTML = "input is empty";
  } else {
    fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignUp")
      .then(response => response.json())
      .then(data => {
        let userValid = data.find(
          d =>
            d.email === emailLogin.value && d.password === passwordLogin.value
        );
        if (!userValid) {
          massageLogin.innerHTML = "Email or Password is invalid";
        } else {
          localStorage.setItem("User", userValid.email);
          window.location.href = "blog.html";
        }
      })
      .catch(e => console.log(e));
  }
});
