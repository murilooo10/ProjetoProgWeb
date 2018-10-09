<?php


$array = glob('../XML/Mensagens_Recebidas/*.xml');


for ($j=0; $j< sizeof($array); $j++)
{

	$xml_string = file_get_contents($array[$j]);

	$xml_objeto = simplexml_load_string($xml_string);
	
		$retorno[$j] ["user"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->user);
		$retorno[$j] ["titulo"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->titulo);
		$retorno[$j] ["remetente"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->remetente);
		$retorno[$j] ["corpoMensagem"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->corpoMensagem);
		
	

	
}

	echo json_encode($retorno);
?>

