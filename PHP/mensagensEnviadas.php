<?php

$user = $_POST['usuario'];




    $array = carregarXML();

    echo json_encode (carregarDados($array));   


   






//-------------------------FUNÇÕES--------------//

function carregarDados($xml)
{
    for ($j=0; $j< sizeof($xml); $j++)
    {

	    $xml_string = file_get_contents($xml[$j]);

        $xml_objeto = simplexml_load_string($xml_string);
        

        $retorno[$j] ["user"] = ($xml_objeto->usuario);
		$retorno[$j] ["assunto"] = ($xml_objeto->assunto);
		$retorno[$j] ["remetente"] = ($xml_objeto->remetente);
        $retorno[$j] ["msg"] = ($xml_objeto->msg);
    }

    return $retorno;
}

function carregarXML ()
{
    return $array = glob('../XML/MensagensEnviadas/*.xml');    
}




?>