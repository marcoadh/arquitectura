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





var imagenes = [
	"imagenes/proyectosperu/proyecto-cristobal.jpg",
	"imagenes/proyectosperu/proyecto-sanborja1.jpg",
	"imagenes/proyectosperu/proyecto-sanborja2.jpg",
	"imagenes/proyectosperu/proyecto-campocalango.jpg",
	"imagenes/proyectosperu/proyecto-playaaucallama.jpg",
	"imagenes/proyectosperu/proyecto-playachocalla.jpg"
];
var titulo = [
	"Pintura de Fachada del Edificio Cristobal de Peralta 1, Surco",
	"Pintura Fachada de Edificio San Borja Sur 1",
	"Pintura Fachada de Edificio San Borja Sur 2",
	"Dise??o y construcci??n Casa de Campo Calango",
	"Dise??o y construcci??n Casa de Playa en Aucallama",
	"Dise??o y Construcci??n Casa de Playa en Chocalla"
];
var x=0;

var descrip = [
	"El encargo fue pintar la fachada de un edificio de 10 pisos en el distrito de Santiago de Surco, Lima, Per?? para la Junta de Propietarios administradora del edificio en cuesti??n en un plazo de 2 semanas en Junio del 2016, actualmente en ejecuci??n, con la finalidad renovar el estado del edificio.",
	"El encargo fu?? la propuesta de color y el servicio de pintura de fachada de un edificio multifamiliar de 8 pisos de altura m??s azotea en el distrito de San Borja en la ciudad de Lima, Per?? para la Junta de Propietarios administradora del edificio en San Borja Sur en un plazo de 3 semanas en Diciembre del 2015, con la finalidad renovar el estado del edificio despues de 4 a??os aproximadamente.",
	"La administradora de este edificio, nuestra clienta, es una mujer de entre 40 y 50 a??os de edad quien se dedica a la administraci??n de varios edificios en distritos de San Borja, Surco, San Isidro y Miraflores en Lima, Per??, quien nos contacto a trav??s de uno de los propietarios quien es un amigo personal y nos dio el contacto.",
	"Nuestro cliente para este proyecto fue el Calango Country Club, ubicado 85 kms. al sur de Lima, quien desarrolla anexo al mismo una urbanizaci??n de cerca de 1000 lotes que en su primera etapa lanzar?? 250 a la venta. Nos encargaron construir y dise??ar una Casa Modelo sencilla en un terreno escogido por el Club que cumpla con el reglamento de construcci??n del condominio para impulsar sus ventas de la primera etapa de lotes y membres??as en el Country Club Calango, para ser entregada al inicio de la temporada de verano, iniciando su construcci??n en setiembre del 2015.",
	"El encargo fue construir y dise??ar una casa sencilla y que tenga la menor cantidad de mantenimiento posible pero con un m??nimo de habitaciones necesarias en su lote comprado anexo al Aucallama Beach Club que no exceda los US$100,000 y est?? lista para el verano, iniciando la construcci??n en setiembre del 2015  ",
	"El encargo del cliente fu?? construir y dise??ar una casa sencilla que genere la menor cantidad de mantenimiento posible pero con un m??nimo de habitaciones necesarias en su lote, mejorando la distribuci??n de las casas existentes en el condominio (habitaciones muy chicas, casas con mucho recorrido y espacios poco iluminados y ventilados) para que tenga buen valor de alquiler o venta al terminar su construcci??n."
];

function banner(){
	document.getElementById("sliderproyecto").src = imagenes[x];
	document.getElementById("nombrepro").innerHTML = titulo[x];
	document.getElementById("descri-proyecto").innerHTML = descrip[x];
	x++;
	if(x>=imagenes.length) x=0;
	setTimeout("banner()",10000);
}


var cuenta = [
	"La imagen e informaci??n cambiar?? en 10s",
	"La imagen e informaci??n cambiar?? en 9s",
	"La imagen e informaci??n cambiar?? en 8s",
	"La imagen e informaci??n cambiar?? en 7s",
	"La imagen e informaci??n cambiar?? en 6s",
	"La imagen e informaci??n cambiar?? en 5s",
	"La imagen e informaci??n cambiar?? en 4s",
	"La imagen e informaci??n cambiar?? en 3s",
	"La imagen e informaci??n cambiar?? en 2s",
	"La imagen e informaci??n cambiar?? en 1s"
];
var z = 0;

function contador(){
	document.getElementById("cuenta").innerHTML = cuenta[z];
	z++;
	if(z>=cuenta.length) z=0;
	setTimeout("contador()",1000);
}

banner();
contador();
