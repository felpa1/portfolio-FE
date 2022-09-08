var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error1");


function enviarForm(){
    console.log("enviando...");

    

    if(email.value ===null || email.value === '' ||password.value === null || password.value === '' ){
       alert(' Debe ingresar un e-mail válido y una contraseña');
    }
    else{
        alert("No ha ingresado porque todavía está en desarrollo. Buen intento.");

    }



    return false;
}

var emailr = document.getElementById("emailR");
var passwordr = document.getElementById("passwordR");
var nombrer = document.getElementById("nombreR");
var password2r = document.getElementById("password2R");
var terminosr =document.getElementById("terminosr");



function enviarFormR(){
    console.log("enviando...");

    

    if(emailr.value ===null || emailr.value === '' ||passwordr.value === null || passwordr.value === '' || password2r.value ===null || password2r.value === '' || nombrer.value ===null || nombrer.value === ''){
       alert('Debe completar todos los campos');
    }
    else{
        alert("No se ha registrado porque todavía está en desarrollo. Vuelva prontos.");

    }



    return false;
}














/*
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var error1 = document.getElementById("error1");
var expresion = /\w+@\w+\.+[a-z]/ ;
error1.style.color = 'red';


function enviarformulario(){

    var mensajeError1 = [];

    if (email.value === null || email.value === '' || password.value === null || password.value === ''|| !expresion.test(email)){
        mensajeError1.push("Debe ingresar un e-mail válido y un mensaje.");
    }
    
    else{
        alert("Mensaje enviado con éxito");
        
    }   

    return false;
};  */