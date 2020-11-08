var email = document.querySelector('.email');
var password = document.querySelector('.password');
var emailError = document.getElementById('email-error');
var passError = document.getElementById('password-error');
var form = document.getElementById('form')
var signin = document.getElementById('btn')
var modal = document.querySelector('.container-1')
var link = document.querySelector('.link')
var showPass = document.querySelector('.fa-eye-slash')
var hidepassword = document.querySelector('.fa-eye')
signin.addEventListener('click',validation)
function load(){
		document.body.style.transform = "scale(1)";
}
  function validation()
    {
    if (email.value=="") {
		 emailError.innerHTML = 'please enter your email'
    return false;
  }
      if (password.value ==""){
         passError.innerHTML = 'please enter your password'
          return false;
  }else if(password.value != ''){
	  passError.innerHTML = '';
  }
		
		modal.style.transform = "scale(1)";
		link.addEventListener('click',pageRedirect)
		 function pageRedirect() {
      window.location.href = 'MainPage.html';
    }
		
								  
}

form.addEventListener('submit',(e) => {
		e.preventDefault();
	})				

//show and hide password feature

showPass.addEventListener('click',showpass)
hidepassword.addEventListener('click',hidepass)

function showpass() {
showPass.style.display = 'none';
hidepassword.style.visibility = 'visible';
	if(password.type = 'password'){
		password.type = 'text';
}
}

function hidepass() {
showPass.style.display = 'block';
hidepassword.style.visibility = 'hidden';
	if(password.type = 'text'){
		password.type = 'password';
}
}

	
		
	
	