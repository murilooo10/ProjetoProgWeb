$(document).ready(function (){
	$.ajax({
			type:"POST",
			dataType:"json",
			url: "../PHP/CaixaEntradaRecebidas.php",
			success: function(retorno)
			{
				console.log(retorno);
				for(var i=0; i<retorno.length;i++)
				{
					
					$("#titulos").append("<br>"+retorno [i].titulo[0]+"<br>");
					$("#remetente").append("<br>"+retorno [i].remetente[0]+"<br>");
					$("#corpoMensagem").append("<br>"+retorno [i].corpoMensagem[0]+"<br>");
				}
			}
	});
});