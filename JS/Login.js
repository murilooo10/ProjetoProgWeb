$(document).ready(function(){

	

	$("#bLogar").click(function (){	
		// criação da sessão do usuario logado.
		
		var user = $("#tLogin").val();
		window.sessionStorage.setItem("user",user);
		


		$.ajax({
		type:"POST",
		dataType:"json",
		url:"PHP/Login.php",
		data:{email:$("#tLogin").val(),senha:$("#tPassword").val()},
		success:function(retorno)
		{
			
			console.log(retorno);
		
			if (retorno == "valido")
			{
				 
				
				window.location.href="paginas/CaixaEntrada.html?usuario=";
			}
			else 
			{
				alert("Usuario errado");
			}
		},
		error: function(erro)
		{
			console.log(erro);
		}

		});
	});
});

