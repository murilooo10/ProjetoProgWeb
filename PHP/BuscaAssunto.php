<?php

$assunto = $_POST["assunto"];


$array = glob('../XML/Mensagens_Recebidas/*.xml');

$i =0;
for ($j=0; $j< sizeof($array); $j++)
{

	$xml_string = file_get_contents($array[$j]);

	$xml_objeto = simplexml_load_string($xml_string);
    
        $assuntoTemp = $xml_objeto->Mensagens->MensagensRecebidas->msg->titulo;


        $assuntoTemp = str_replace(" ", "", $assuntoTemp);
        $assuntoTemp = trim($assuntoTemp);
       
    
        if($assuntoTemp == $assunto)
        {
            

            $retorno[$i] ["titulo"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->titulo);
	        $retorno[$i] ["remetente"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->remetente);
		    $retorno[$i] ["corpoMensagem"] = ($xml_objeto->Mensagens->MensagensRecebidas->msg->corpoMensagem);
            
            $i++;
        }	
}

    echo json_encode($retorno);


?>