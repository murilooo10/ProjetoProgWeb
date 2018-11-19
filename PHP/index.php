<?php 

$senha = $_POST['senha'];
$email = $_POST['email'];

	$xml_string = file_get_contents("../XML/teste.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	

if($email == "" || $senha == ""){

	echo json_encode("Preencher_campos");

}
else if ($email == $xml_objeto->Users->Login && $senha == $xml_objeto->Users->Senha)
	{

		echo json_encode("valido"); 
	}
	else
	{
		echo json_encode("invalido"); 

	}

	
	

 ?>