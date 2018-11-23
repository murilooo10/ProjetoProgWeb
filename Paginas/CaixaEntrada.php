<html>

<head>
    <title>Index</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../CSS/caixaEntrada.css">
	<script type="text/javascript" src="../JS/jquery.js"></script>
<script type="text/javascript" src="../JS/CaixaEntrada.js"></script>
<script type="text/javascript" src="../JS/BuscaAssuntos.js"></script>
<script type="text/javascript" src="../JS/apagarEmail.js"></script>
    <!--<link rel="stylesheet" href="../CSS/login.css">-->
</head>


<body>
    <table id="cabecario">
        <td><img src="../imagens/icone_menu.png" height="40px" width="numero_largura"></td>
        <td>
            <input type="text" id="campoBusca" placeholder="Buscar Email">
        </td>
        <td>
            <button id="buscar"><img style="width: 100%" src="../imagens/search.png"></button>
        </td>
        <td><button id="logout"><b>Logout</b></button></td>
    </table>
    <div>
        <table id="bodyEmail" cellspacing="0">
            <tr>
                <td><a href="novaMensagem.html"><button id="novaMensagem">+ Nova Mensagem</button></a></td>
                <th style="float: left;margin-top: 10px;"> Caixa de Entrada</th>
            </tr>
            <tr>
                <td>
                    <div id="menuLateral" cellspacing="0">
                        <button class="menuimpar"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%; margin-right:5PX;"><p style="MARGIN: 0;margin-right: 83px;">Favoritos</p></button><br>
                        <button class="menupar"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style="MARGIN: 0;margin-right: 64px;">Caixa de Entrada</p></button><br>
                        <button class="menuimpar"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style="MARGIN: 0; margin-right: 75px;">Lixo Eletrônico</p></button><br>
                        <button class="menupar"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style="MARGIN: 0;margin-right: 104px;">Rascunho</p></button><br>
                        <button class="menuimpar" id="mensagensEnviadas"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style="MARGIN: 0; margin-right: 77px;">Itens Enviados</p></button><br>
                        <button class="menupar" id="mensagensExcluidas"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style="MARGIN: 0; margin-right: 77px;">Itens Excluidos</p></button><br>
                        <button class="menuimpar"><img src="../imagens/icone_menu.png" id="image_menu" style="width: 10%"><p style=" MARGIN: 0;margin-right: 79px;">Arquivo Morto</p></button><br>
                    </div>
                </td>
                <td id="mensagens">
                    <div id="fundoMensagem">
                        <table id="tabelaMensagem" cellspacing="O">
                            <thead>
                                <tr>
                                    <th style="width: 20%; border-left:0px;">Remetente</th>
                                    <th style="width: 20%">Assunto</th>
                                    <th style="width: 50%">Mensagem</th>
                                    <th style="width: 10%">Ação</th>
                                </tr>
                            </thead>
                            <tbody id="emails">

                            </tbody>
                        </table>
                    </div>

                </td>
            </tr>
        </table>
    </div>
</body>

<!-- javaScript -->



</html>
