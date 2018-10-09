<?php 

$senha = $_POST['senha'];
$email = $_POST['email'];

		$array = glob('../XML/users/*.xml');


		for ($j=0; $j< sizeof($array); $j++)
		{
			$xml_string = file_get_contents($array[$j]);
			
			$xml_objeto = simplexml_load_string($xml_string);

		
			
				$retorno[$j] ["Login"] = ($xml_objeto->Login);
				$retorno[$j] ["Senha"] = ($xml_objeto->Senha);
					
		}

		

		for($i =0; $i< sizeof($array); $i++)
		{
			 if ($email == $retorno[$i]["Login"]  && $senha == $retorno[$i]["Senha"])
				{
					echo json_encode("valido"); 
					break;
				}
				
		}

		
			
		
				
	

 ?>