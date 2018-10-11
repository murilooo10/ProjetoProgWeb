<?php

$assunto = $_POST["assunto"];


$array = glob('../XML/MensagensRecebidas/*.xml');

$i =0;
for ($j=0; $j< sizeof($array); $j++)
{

	$xml_string = file_get_contents($array[$j]);

	$xml_objeto = simplexml_load_string($xml_string);
    
        $assuntoTemp = $xml_objeto->assunto;


        $assuntoTemp = str_replace(" ", "", $assuntoTemp);
        $assuntoTemp = trim($assuntoTemp);
       
    
        if($assuntoTemp == $assunto)
        {
            

            $retorno[$i] ["assunto"] = ($xml_objeto->assunto);
	        $retorno[$i] ["remetente"] = ($xml_objeto->remetente);
		    $retorno[$i] ["msg"] = ($xml_objeto->msg);
            
            $i++;
        }	
}

    echo json_encode($retorno);


?>