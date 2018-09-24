<?php


	$xml_string = file_get_contents("../XML/Teste.xml");

	$xml_objeto = simplexml_load_string($xml_string);


	 
	$retorno = [];
	for($i=0; $i < sizeof($xml_objeto->Mensagens->MensagensEnviadas->msg); $i++)
	{
		
		$retorno[$i] ["titulo"] = ($xml_objeto->Mensagens->MensagensEnviadas->msg[$i]->titulo);
		$retorno[$i] ["remetente"] = ($xml_objeto->Mensagens->MensagensEnviadas->msg[$i]->remetente);
		$retorno[$i] ["corpoMensagem"] = ($xml_objeto->Mensagens->MensagensEnviadas->msg[$i]->corpoMensagem);
		
	}

	
	echo json_encode($retorno);

?>