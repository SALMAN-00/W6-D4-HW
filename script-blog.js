// CKEDITOR
CKEDITOR.replace("textarea");
let blog = document.getElementById("blog");
let btn = document.getElementById("btn");
let clearBtn = document.getElementById("clear-button");
let userEmail = document.getElementById("username");
let logout = document.getElementById("logout");
let storedUserEmailLogin = localStorage.getItem("User");
let storedUserEmailLogout = localStorage.removeItem("User");
if (storedUserEmailLogin !== null && storedUserEmailLogin !== undefined) {
  userEmail.innerHTML = storedUserEmailLogin;
} else {
  userEmail.innerHTML = "Gest";
}
btn.addEventListener("click", () => {
  let texterea = CKEDITOR.instances.textarea.getData();
  blog.insertAdjacentHTML("beforeend", texterea);
});

clearBtn.addEventListener("click", () => {
  blog.innerHTML = "";
});

logout.addEventListener("clic", () => {
  storedUserEmailLogout;
});
