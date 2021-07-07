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
