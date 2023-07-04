const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

/* Validasi */

const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const hp = document.querySelector("#hp");
const message = document.querySelector("#message");
const succes = document.querySelector("#succes")
const error = document.querySelectorAll(".error")

function send() {
  
  clearMessage();
  let errorFlag = false;
  
  if(nama.value.length < 1) {
    error[0].innerText = "Nama tidak sesuai ";
    nama.classList.add("erorr")
    errorFlag = true;
  }
  
  if(!emailsValid(email.value) < 1) {
    error[1].innerText = "email tidak sesuai ";
    email.classList.add("erorr")
    errorFlag = true;
  }
  
  if(hp.value.length < 1) {
    error[2].innerText = "no hp tidak sesuai ";
    hp.classList.add("erorr")
    errorFlag = true;
  }
  
  if(message.value.length < 1) {
    error[3].innerText = "message tidak sesuai ";
    message.classList.add("erorr")
    errorFlag = true;
  }
  
  if(!erorrFlag) {
    succes.innerText = "Succes"
    alert("yy")
  }
}

function clearMessage() {
  for(let i = 0; i < error.length; i++) {
    error[i].innerText = "";
  }
  succes.innerText = ""
  nama.classList.remove("erorr-border");
  email.classList.remove("erorr-border");
  hp.classList.remove("erorr-border");
  message.classList.remove("erorr-border");
}

function emailsValid(email) {
  let pattern = /\$+@\$+\.\$+/;
  return pattern.test(email)
}