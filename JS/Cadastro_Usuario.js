$(document).ready(function (){

    $("#cadastrar").click(function(){

        $.ajax({
            type:"POST",
            dataType:"json",
            url: "../PHP/Cadastro_Usuario.php",
            data:{user:$("#login").val(),senha:$("#senha").val()},
            success: function(retorno)
            {		
                window.location.href="../index.php";
            }
        });
    });

    






});