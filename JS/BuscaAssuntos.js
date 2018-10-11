$(document).ready(function (){ 
    
    $("#buscar").click(function (){

        console.log("entrei");
        
        var assunto_Recebido = trim($("#campoBusca").val());
        
        $.ajax({
			type:"POST",
			dataType:"json",
            url: "../PHP/BuscaAssunto.php",
            data:{assunto:assunto_Recebido},
			success: function(retorno)
			{		
                
				$("#assunto").html(""); //limpeza dos campos das mensagens enviadas.
				$("#remetente").html("");//limpeza dos campos das mensagens enviadas.
				$("#msg").html("");	//limpeza dos campos das mensagens enviadas.
				
				for(var i=0; i<retorno.length;i++)
				{										
					$("#assunto").append("<br>"+retorno [i].assunto[0]+"<br>");
					$("#remetente").append("<br>"+retorno [i].remetente[0]+"<br>");
					$("#msg").append("<br>"+retorno [i].msg[0]+"<br>");
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
    
//----------------- funções ------------//

    function trim(vlr) {

        while(vlr.indexOf(" ") != -1)
        vlr = vlr.replace(" ", "");
         return vlr;
        }



});