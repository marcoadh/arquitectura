// JavaScript Document

$(function(){
	$('#btn-menu').click(function(){
		if($('.btn-menu span').attr('class') == 'fa fa-bars'){
			
			$('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-close').css({'color':'#fff','transition':'2s'});
			$('.full-menu').css({'left':'0','transition':'1.5s'});
			
		}
		else{
			
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-bars').css({'color':'#000','transition':'2s'});
			$('.full-menu').css({'left':'-100%'});
		   
		}
	});
	
	$(".logo-arquit").mouseover(function(){
		$(this).css("height","100px");
		$(this).css("transition","1s");
		$(this).css("cursor","pointer");
	});
	
	$(".logo-arquit").mouseout(function(){
		$(this).css("height","80px");
		$(this).css("transition","1s");
	});
	
	$(".logocliente").mouseover(function(){
		$(this).css("height","90px");
		$(this).css("transition","2s");
		$(this).css("cursor","pointer");
	});
	
	$(".logocliente").mouseout(function(){
		$(this).css("height","105px");
		$(this).css("transition","2s");
	});
	
	$(".icon-redes").mouseover(function(){
		$(this).css("transition","2s");
		$(this).css("cursor","pointer");
	});
	
	$(".icon-redes").mouseout(function(){
		$(this).css("transition","2s");
	});
	
	
	$(".fa-youtube-play").click(function(){
		window.open("http://www.youtube.com","_blank");
	});
	
	$(".fa-facebook").click(function(){
		window.open("http://www.facebook.com","_blank");
	});
	
	$(".fa-twitter").click(function(){
		window.open("http://www.twitter.com","_blank");
	});
	
	
	$("#abrir1").click(function(){
		window.open("http://www.facebook.com","_blank");
	});
	
	$("#abrir2").click(function(){
		window.open("http://www.instagram.com","_blank");
	});
	
	$("#abrir3").click(function(){
		window.open("http://www.youtube.com","_blank");
	});
	
	$("#abrir4").click(function(){
		window.open("http://www.linkedin.com","_blank");
	});
	/* Codigo repetitivo*/
});




// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

var formulario = document.formulario_registro,
	elementos = formulario.elements;

// Funcion que se ejecuta cuando el evento click es activado

var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
			// Si es tipo texto, email o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				console.log('El campo ' + elementos[i].name + ' esta incompleto');
				elementos[i].className = elementos[i].className + " error";
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(" error", "");
			}
		}
	}

	// Comprobando que las contraseñas coincidan
	if (elementos.pass.value !== elementos.pass2.value) {
		elementos.pass.value = "";
		elementos.pass2.value = "";
		elementos.pass.className = elementos.pass.className + " error";
		elementos.pass2.className = elementos.pass2.className + " error";
	} else {
		elementos.pass.className = elementos.pass.className.replace(" error", "");
		elementos.pass2.className = elementos.pass2.className.replace(" error", "");
	}

	return true;
};

var validarRadios = function(){
	var opciones = document.getElementsByName('sexo'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				alert("Selecionar sexo");
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};

var validarCheckbox = function(){
	var opciones = document.getElementsByName('terminos'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "checkbox"){
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				alert("Aceptar los terminos.");
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};

var enviar = function(e){
	if (!validarInputs()) {
		alert("Completar las cajas de texto.");
		e.preventDefault();
	} else if (!validarRadios()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	} else if (!validarCheckbox()) {
		console.log('Falto validar Checkbox');
		e.preventDefault();
	} else {
		alert("Datos enviados correctamente.");
		e.preventDefault();
	}
};

var focusInput = function(){
	this.parentElement.children[1].className = "label active";
	this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
	if (this.value <= 0) {
		this.parentElement.children[1].className = "label";
		this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
	}
};

// --- Eventos ---
formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
		elementos[i].addEventListener("focus", focusInput);
		elementos[i].addEventListener("blur", blurInput);
	}
}

}())
