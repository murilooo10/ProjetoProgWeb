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

