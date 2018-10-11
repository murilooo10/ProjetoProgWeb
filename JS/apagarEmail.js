$(document).ready(function (){ 

    $("table").on("click",".btnApagar",function(){

        console.log($(this).val());
		 $.ajax({

            type:"POST",
            dataType:"json",
            url: "../PHP/apagarEmail.php",
            data:{email:$(this).val()},
            success: function(retorno)
            {
                alert(retorno);

            },
            erro: function(erro)
            {

                console.log(erro);
            }

        });	

             $(this).closest("tr").remove(); // metodo para apagar a tr que o botão pertence
     });
});