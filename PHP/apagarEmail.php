<?php

$email = $_POST['email'];


        excluirEmail($email);

        echo json_encode ("Mensagem Deletada");

//-----------------funções---------------------//
        function excluirEmail($arquivo)
        {
            rename("../XML/MensagensRecebidas/$arquivo","../XML/MensagensExcluidas/$arquivo");
        }


?>
