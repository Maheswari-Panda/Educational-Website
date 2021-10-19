console.log('Hello World!');
//for menu bar
let navbar = document.querySelector('.navbar');
let menubar = document.querySelector('.fa-bars');
menubar.onclick = () => {
   menubar.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}
//Signup page 
let SignUpForm = document.querySelector('.SignUpForm');
let usericon = document.querySelector('.fa-user');
let removesignup = document.querySelector('.fa-star');
removesignup.onclick = () => {
   SignUpForm.classList.toggle('remove');
   window.location.reload();
}
usericon.onclick = () => {
   usericon.classList.toggle('fa-times');
   SignUpForm.classList.toggle('active');
   
}

//login page
let loginForm = document.querySelector('.loginForm');
let login = document.querySelector('#login');
let remove = document.querySelector('.fa-times');
remove.onclick = () => {
   loginForm.classList.toggle('remove');
     window.location.reload();
}
login.onclick = () => {
   loginForm.classList.toggle('active');
  SignUpForm.classList.toggle('remove');
   
}

//for them toggler
let body = document.querySelector('body');
let themetoggler = document.querySelector('.fa-moon');
themetoggler.onclick = () => {
   themetoggler.classList.toggle('fa-sun');
   body.classList.toggle('active');
}

//for changing bg image

