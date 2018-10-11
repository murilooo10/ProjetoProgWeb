<?php

$remetente = $_POST['remetente'];
$assunto = $_POST['assunto'];
$msg = $_POST['msg'];
$user = $_POST['usuario'];


    novaMensagem($remetente,$assunto,$msg,$user);
    echo json_encode ("Mensagem enviada");



 // -------------FUNÇÕES--------------------------------   


function novaMensagem($remetente,$assunto,$msg,$user){

    $dom = new DOMDocument("1.0", "ISO-8859-1");

    #retirar os espacos em branco
    $dom->preserveWhiteSpace = false; 


    $raiz = $dom->createElement("mensagem");

    $user = $dom->createElement("usuario",$user);

    $noMsg = $dom->createElement("msg",$msg); 

    $noAssunto = $dom->createElement("assunto",$assunto);

    $noRemetente = $dom->createElement("remetente",$remetente); 
    

    $raiz ->appendChild($user); 
    $raiz ->appendChild($noRemetente); 
    $raiz ->appendChild($noAssunto); 
    $raiz ->appendChild($noMsg); 
  
    $dom-> appendChild($raiz); 

    $data = datee();

    $dom->save("../XML/MensagensEnviadas/".$data.".xml"); // save do XML

}


function datee(){

    $data = date("H:i");
    $partes = explode(":", $data);
    $hora = $partes[0];
    $minuto = $partes[1];
 

    return $data = $hora."-".$minuto;
}

?>