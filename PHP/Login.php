<?php

$login = $_POST['user'];
$password = $_POST['password'];


    $array = carregarXML();

    $retorno = leituraLogin($array);

    echo json_encode (validarUser($array,$retorno,$login,$password));





// -------------------------------------------------funções ---------------------------------------------------


    function carregarXML ()
    {
        return $array = glob('../XML/Users/*.xml');    
    }

    function leituraLogin($xml)
    {
        for($i=0; $i< sizeof($xml);$i++)
        {
            $xml_string = file_get_contents($xml[$i]); // leitura do arquivo xml			
            $xml_objeto = simplexml_load_string($xml_string);
            
            // armazanamento de logins e senhas
            $retorno[$i] ["Login"] = ($xml_objeto->Login);
			$retorno[$i] ["Senha"] = ($xml_objeto->Senha);

        }
        return $retorno;
    }

    function validarUser($xml,$retorno,$login,$password)
    {
        for($i =0; $i< sizeof($xml); $i++)
		{
			 if ($login == $retorno[$i]["Login"]  && $password == $retorno[$i]["Senha"])
				{
					return ("valido"); 
					break;
				}				
		}
    }



    




?>