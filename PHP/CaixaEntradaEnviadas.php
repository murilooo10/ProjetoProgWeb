<?php


$array = glob('../XML/Mensagens_Enviadas/*.xml');

for ($j=0; $j< sizeof($array); $j++)
{

	$xml_string = file_get_contents($array[$j]);

	$xml_objeto = simplexml_load_string($xml_string);
	
		$retorno[$j] ["titulo"] = ($xml_objeto->mensagens->msg->assunto);
		$retorno[$j] ["remetente"] = ($xml_objeto->mensagens->msg->distinatario);
		$retorno[$j] ["corpoMensagem"] = ($xml_objeto->mensagens->msg->corpoMensagem);
		
	

	
}

	echo json_encode($retorno);

?>