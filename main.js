// dark theme 
function toogleDark() {
    const elements = document.querySelectorAll('.container1');
    elements.forEach(x => x.classList.toggle('dark'));
 };
 
 function toogleDark1() {
     const elements = document.querySelectorAll('.container2');
     elements.forEach(x => x.classList.toggle('dark'));
 };

 function toogleDark2() {
 const elements = document.querySelectorAll('.container3');
     elements.forEach(x => x.classList.toggle('dark'));
 };

 function toogleDark3() {
 const elements = document.querySelectorAll('.container4');
     elements.forEach(x => x.classList.toggle('dark'));
 };
 
 function toogleDark4() {
 const elements = document.querySelectorAll('.container5');
     elements.forEach(x => x.classList.toggle('dark'));
 };
//  dark theme

// typing text
 var i = 0, text;
 text = "FrontEnd \n Developer"
 
 function typing (){
    if(text.charAt(i) == '\n') document.getElementById("text").innerHTML += "<br>";
      else
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,80)
    }
 

typing();
// typing text

// form validation
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const send = document.getElementById("sendButton");

send.addEventListener('click', formValidation)

function formValidation (){
    if(name.value === "" || name.value === null){
        alert('Name cannot be empty')
    } else if(name.value.length < 4){
        alert('Name must at least consist of 5 alphabets')    
    } else if(email.value === "" || email.value === null){
        alert('Email cannot be empty')
    } else if(email.value.length < 4){
        alert('Email must at least consist of 5 alphabets')    
    } else if(number.value === "" || number.value === null){
        alert('Number cannot be empty')
    } else  if(number.value.length <= 9){
        alert('Number must at least consist of 10 digit or more ')
    } else  if(number.value.length >= 14){
        alert('Number must max consist of 14 digit or less')
    } else if(!email.value.match(mailformat)){
        alert('Invalid email address!')
        
    } else{
        alert("Thank You For Submitting i'll Contact You ASAP")
    }
    
}

// form validation

// dropdown nav

const input = document.querySelector('.nav-toogle input');
const navToogle = document.querySelector('.container1 .nav');

input.addEventListener('click', function(){
    navToogle.classList.toggle('slide');
});

// dropdown nav

// revealscroll effect

window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealTop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        } else{
            reveals[i].classList.remove('active')
        }
    }
}