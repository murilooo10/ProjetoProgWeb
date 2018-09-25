
$(document).ready(function(){

	

	$("#bLogar").click(function (){

		

		$.ajax({


		type:"POST",
		dataType:"json",
		url:"PHP/index.php",
		data:{email:$("#tLogin").val(),senha:$("#tPassword").val()},
		success:function(retorno)
		{
			console.log(retorno);
			if (retorno == "valido")
			{
				window.location.href="paginas/CaixaEntrada.html";
			}
			else if(retorno == "Preencher_campos")
			{
				alert("Preencher todos os campos");
				
			}else{
				alert("Login ou senha inválidos");
			}


		},
		error: function(erro)
		{
			console.log(erro);
		}

		});
	});
});

