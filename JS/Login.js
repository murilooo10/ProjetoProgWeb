$(document).ready(function (){

    


    $("#bLogar").click(function (){    
        let login = $("#tLogin").val();
        let senha = $("#tPassword").val();

        // criando a sessão de usuario
        let user = $("#tLogin").val();
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