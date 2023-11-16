// CKEDITOR
CKEDITOR.replace("textarea");
let blog = document.getElementById("blog");
let btn = document.getElementById("btn");
let clearBtn = document.getElementById("clear-button");
let userEmail = document.getElementById("username");

let storedUserEmail = localStorage.getItem("User");

if (storedUserEmail !== null && storedUserEmail !== undefined) {
  userEmail.innerHTML = storedUserEmail;
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
