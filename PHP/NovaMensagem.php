<?php

$destinatario = $_POST['Destinatario'];
$cc = $_POST['Cc'];
$assunto = $_POST['Assunto'];
$mensagem = $_POST['Mensagem'];
$user_logado = $_POST["usuario"];

if (session_status() != PHP_SESSION_ACTIVE)
{
    session_start();
}

$usuario = $user_logado;

$dom = new DOMDocument("1.0", "ISO-8859-1");

#retirar os espacos em branco
$dom->preserveWhiteSpace = false; // retirando os espaços

$raiz = $dom->createElement("mensagens"); // criando o nó principal

$user = $dom->createElement("usuario",$usuario);

$msg = $dom->createElement("msg"); // criaçao de nó 

$noAssunto = $dom->createElement("assunto",$assunto); // criaçao de nó 
$noMensagem = $dom->createElement("corpoMensagem",$mensagem); // criaçao de nó 
$noCc = $dom->createElement("copia",$cc); // criaçao de nó 
$noDestinatario = $dom->createElement("distinatario",$destinatario); // criaçao de nó 

$msg ->appendChild($noDestinatario); // append no nó msg
$msg ->appendChild($noAssunto); // append no nó msg
$msg ->appendChild($noCc); // append no nó msg
$msg ->appendChild($noMensagem); // append no nó msg
$msg ->appendChild($user); // append no nó msg

$raiz->appendChild($msg); // append no nó raiz
$dom-> appendChild($raiz); // append no documento




$dom->save("../XML/Mensagens_Enviadas/".$assunto.".xml"); // save do XML

?>