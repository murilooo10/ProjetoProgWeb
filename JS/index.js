
$(document).ready(function(){

	

	$("#bLogar").click(function (){

		

		$.ajax({


		type:"POST",
		dataType:"json",
		url:"PHP/index.php",
		data:{email:$("#tLogin").val(),senha:$("#tPassword").val()},
		success:function(retorno)
		{
			if (retorno == "valido")
			{
				window.location.href="paginas/CaixaEntrada.html";
			}
			else
			{
				alert("Login ou senha inválidos");
			}


		},
		error: function(erro)
		{
			console.log(erro);
		}

	});



$(document).ready(function (){

	

	$("#").click(function(){

		var login = ("#login").val();
		var senha = ("#senha").val();

	});


	$.ajax({

		type:"POST",
		dataType:"json",
		url:"index.php",
		asynf:false,
		data:{Nsenha:senha,Nlogin:login},
		success:function()
		{

		}


	});



	



});


});


