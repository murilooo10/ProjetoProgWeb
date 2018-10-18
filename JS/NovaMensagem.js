$(document).ready(function (){

    let user = window.sessionStorage.getItem("user");
    console.log(user);
    $("#enviar").click(function (){

        $.ajax({
            type:"POST",
            dataType:"json",
            url:"../PHP/novaMensagem.php",
            data:{remetente:$("#remetente").val(),assunto:$("#assunto").val(),msg:$("#msg").val(),usuario:user},
            success: function(retorno){
                alert(retorno);
                window.location.href = "caixaEntrada.html";
            },
            error:function(erro){
                alert("Erro ao enviar a mensagem");
                
                console.log(erro);
            }   
        });    
    });

});