<?php

    $login = $_POST['user'];
    $senha = $_POST['senha'];


    createXml($login,$senha);


    //--------------------------Funções------------------------------------//


    function createXml($login,$senha)
    {
        $dom = new DOMDocument("1.0", "ISO-8859-1");

        #retirar os espacos em branco
        $dom->preserveWhiteSpace = false; 

        $raiz =$dom->createElement("User");
        $user = $dom->createElement("Login",$login);
        $password = $dom->createElement("Senha",$senha);

        $raiz->appendChild($user);
        $raiz->appendChild($password);

        $dom->appendChild($raiz);

        $dom->save("../XML/Users/".$login.".xml");
    }




?>