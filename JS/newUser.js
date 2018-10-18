$(document).ready(function (){

    $("#bCadastrar").click(function (){
      let login = $("#tLogin").val();
      let password = $("#tPassword").val();
     
        $.ajax({
            type:"POST",
            dataType:"json",
            url:"../PHP/newUser.php",
            data:{user:login,senha:password},
            success: function(retorno){
                console.log(retorno);
                window.location.href="../index.php";
            },
            error: function(erro){
                console.log(erro);
                window.location.href="../index.php";
            }
        });
    });
});