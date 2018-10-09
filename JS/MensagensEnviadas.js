$(document).ready(function (){
	$("#Enviadas").click(function (){
		$.ajax({
			type:"POST",
			dataType:"json",
			url: "../PHP/CaixaEntradaEnviadas.php",
			success: function(retorno)
			{		

				$("#titulos").html(""); //limpeza dos campos das mensagens enviadas.
				$("#remetente").html("");//limpeza dos campos das mensagens enviadas.
				$("#corpoMensagem").html("");	//limpeza dos campos das mensagens enviadas.
				
				for(var i=0; i<retorno.length;i++)
				{					
					
					$("#titulos").append("<br>"+retorno [i].titulo[0]+"<br>");
					$("#remetente").append("<br>"+retorno [i].remetente[0]+"<br>");
					$("#corpoMensagem").append("<br>"+retorno [i].corpoMensagem[0]+"<br>");
				}
			}
		});
	});
});