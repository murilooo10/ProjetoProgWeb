<?php 


	$xml_string = file_get_contents("../XML/Teste.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	print_r($xml_objeto);

 ?>