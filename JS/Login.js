$(document).ready(function (){

    


    $("#bLogar").click(function (){    
        var login = $("#tLogin").val();
        var senha = $("#tPassword").val();

        // criando a sessão de usuario
        var user = $("#tLogin").val();
		window.sessionStorage.setItem("user",user);
        
        $.ajax({
            type:"POST",
            dataType:"json",
            url:"PHP/login.php",
            data:{user:login,password:senha},
            success: function(retorno){
                console.log(retorno);
                window.location.href = "PAGINAS/caixaEntrada.html";
            },
            error:function(erro){

                console.log(erro);
            }   
        });
    });
});