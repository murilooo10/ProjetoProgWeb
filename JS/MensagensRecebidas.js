$(document).ready(function (){

	var user = window.sessionStorage.getItem("user");
	
	console.log(user);

	$.ajax({
			type:"POST",
			dataType:"json",
			url: "../PHP/CaixaEntradaRecebidas.php",
			success: function(retorno)
			{
				
				for(var i=0; i<retorno.length;i++)
				{
					var userRetorno = retorno [i].user[0];

					var retornoFull = trim(userRetorno);

					retornoFull = retornoFull.trim();
					
					if (retornoFull == user)
					{
						$("#titulos").append("<br>"+retorno [i].titulo[0]+"<br>");
						$("#remetente").append("<br>"+retorno [i].remetente[0]+"<br>");
						$("#corpoMensagem").append("<br>"+retorno [i].corpoMensagem[0]+"<br>");
					}
					
				}
			}
	});


		$("#logout").click(function (){

			window.sessionStorage.removeItem("user");

			window.location.href="../index.php";

		});


		function trim(vlr) {

			while(vlr.indexOf(" ") != -1)
			vlr = vlr.replace(" ", "");
			 return vlr;
			}

});