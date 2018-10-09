$(document).ready(function (){ 
    
    $("#buscar").click(function (){

        console.log("entrei");
        
        var assunto_Recebido = trim($("#busca").val());

        console.log(assunto_Recebido);
        
        $.ajax({
			type:"POST",
			dataType:"json",
            url: "../PHP/BuscaAssunto.php",
            data:{assunto:assunto_Recebido},
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
            },
            error: function(erro)
            {
                alert("Mensagem não encontrada");                
            }
		});    
    });

    $("#limpar").click(function(){

        location.reload();

    });
    

    function trim(vlr) {

        while(vlr.indexOf(" ") != -1)
        vlr = vlr.replace(" ", "");
         return vlr;
        }



});