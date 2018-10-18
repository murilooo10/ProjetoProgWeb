$(document).ready(function (){

    let user = window.sessionStorage.getItem("user");
  
    

        carregarMensagensRecebidas();
       
    

    $("#logout").click(function(){

        logoutUser();
    });

    $("#mensagensEnviadas").click(function (){

        carregarMensagensEnviadas();

    });

    $("#mensagensExcluidas").click(function (){

        carregarMensagensExcluidas();
    });



    // -------------------Funcões ------------------------------------

    function carregarMensagensEnviadas(){

        $.ajax({
            type:"POST",
            dataType:"json",
            url:"../PHP/mensagensEnviadas.php",
            data:{usuario:user},
            success: function(retorno){

                $("tbody").html(""); 
				

                for(var i=0; i<retorno.length;i++)
				{
					var userRetorno = retorno [i].user[0];

					var retornoFull = trim(userRetorno);

                    userRetorno = retornoFull.trim();
                    
                    console.log(userRetorno);
					
					if (retornoFull == user)
					{

                        let html = "<tr>"+									
                                    "<td>"+retorno[i].remetente[0]+"</td>"+
                                    "<td>"+retorno[i].assunto[0]+"</td>"+
									"<td>"+retorno[i].msg[0]+"</td>"+
									"<td>"+"<button class='btnApagar'value='"+retorno[i].nomeArquivo+"'>"+'Deletar'+"</button>"+ 
                                    "</tr>";
                                    
                                  
                                    $("tbody").append(html);

                        
					}
					
				}
                
           },
            error:function(erro){
                console.log(erro);
            }   
        });

    }


    function trim(vlr) {

        while(let.indexOf(" ") != -1)
        let = let.replace(" ", "");
         return let;
        }


    function logoutUser()
    {
        window.sessionStorage.removeItem("user");
		window.location.href="../index.php";
    }

    function carregarMensagensExcluidas(){

        $.ajax({
            type:"POST",
            dataType:"json",
            url:"../PHP/mensagensExcluidas.php",
            success: function(retorno){
                $("tbody").html(""); 
                
                $("#pasta").html("Mensagens Exluidas");
                
                for(let i=0; i<retorno.length;i++)
				{
                    
                    let html = "<tr>"+
									"<td>"+retorno[i].assunto[0]+"</td>"+
									"<td>"+retorno[i].remetente[0]+"</td>"+
									"<td>"+retorno[i].msg[0]+"</td>"+
									"<td>"+"<button class='btnApagar'value='"+retorno[i].nomeArquivo+"'>"+'Deletar'+"</button>"+ 
                                    "</tr>";
                                    
                                  
                                    $("tbody").append(html);
                                    
                }
                
                
           },
            error:function(erro){

                let html = "<tr><td colspan='3'>"+"Você não tem mensagens"+"</td></tr>";
                $("tbody").append(html);
                console.log(erro);
                
            }   
        });


    }



    function carregarMensagensRecebidas(){

        $.ajax({
            type:"POST",
            dataType:"json",
            url:"../PHP/caixaEntrada.php",
            success: function(retorno){
                $("tbody").html(""); 
                for(let i=0; i<retorno.length;i++)
				{

                    var html = "<tr class='mensagem'>"+									
                                    "<td id='remetente'>"+retorno[i].remetente[0]+"</td>"+
                                    "<td id='assunto'>"+retorno[i].titulo[0].trim()+"</td>"+
									"<td id='msg'>"+retorno[i].corpoMensagem[0]+"</td>"+
									"<td>"+"<button class='btnApagar'value='"+retorno[i].nomeArquivo+"'>"+'Apagar'+"</button>"+ 
                                    "</tr>";
                                    
                                    $("tbody").append(html);
				}
                
           },
            error:function(erro){

                let html = "<tr><td colspan='4'>"+"Você não tem mensagens"+"</td></tr>";
                $("tbody").append(html);
                console.log(erro);
                
            }   
        });
    }

});