<?php 

$senha = $_POST['senha'];
$email = $_POST['email'];

	$xml_string = file_get_contents("../XML/teste.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	echo json_decode($xml_objeto->Users->Login);

	if ($email == $xml_objeto->Users->Login && $senha == $xml_objeto->Users->Senha )
	{

		echo json_encode("valido"); 
	}
	else
	{
		echo json_encode("invalido"); 

	}

	
	

 ?>