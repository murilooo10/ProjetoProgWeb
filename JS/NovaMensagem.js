$(document).ready(function (){
	$("#Enviar").click(function (){
	//	console.log("entrei");
		$.ajax({
				type:"POST",
				dataType:"json",
				url: "../PHP/NovaMensagem.php",
				data: {Destinatario:$("#Destinatario").val(),Cc:$("#Cc").val(),Assunto:$("#Assunto").val(),Mensagem:$("#Mensagem").val()},
				success: function(retorno)
				{
					
				}
			});

	});
});