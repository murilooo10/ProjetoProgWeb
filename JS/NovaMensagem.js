$(document).ready(function (){


	var user = window.sessionStorage.getItem("user");


	$("#Enviar").click(function (){
	//	console.log("entrei");
		$.ajax({
				type:"POST",
				dataType:"json",
				url: "../PHP/NovaMensagem.php",
				data: {Destinatario:$("#Destinatario").val(),Cc:$("#Cc").val(),Assunto:$("#Assunto").val(),Mensagem:$("#Mensagem").val(), usuario:user},
				success: function(retorno)
				{
					
				}
			});

	});



	$("#voltar").click(function (){


		window.location.href = "CaixaEntrada.html"
	});
});