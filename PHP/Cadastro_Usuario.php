<?php

$usuario = $_POST['user'];
$senha = $_POST['senha'];




$dom = new DOMDocument("1.0", "ISO-8859-1");

#retirar os espacos em branco
$dom->preserveWhiteSpace = false; // retirando os espaços

$raiz =$dom->createElement("User");

$user = $dom->createElement("Login",$usuario);
$password = $dom->createElement("Senha",$senha);

$raiz->appendChild($user);
$raiz->appendChild($password);

$dom->appendChild($raiz);


$dom->save("../XML/users/".$usuario.".xml");










?>