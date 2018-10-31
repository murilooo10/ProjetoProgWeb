$(document).ready(function (){ 

    $("#campoBusca").keyup(function (){

        var mensagens = document.querySelectorAll(".mensagem");
        
        console.log(mensagens);
        
        
        var assunto_Recebido = $("#campoBusca").val();

        if (assunto_Recebido.length > 0)
        {

        
            for(var i=0; i<mensagens.length; i++)
            {
                mensagem = mensagens[i];
                var assuntotemp = mensagem.querySelector("#assunto");
                var assunto = assuntotemp.textContent;
                var expresssao = new RegExp(this.value,"i");
                if(!expresssao.test(assunto.trim())){
                    mensagem.classList.add("invisible");
                }else{        
                    mensagem.classList.remove("invisible");
                }
            }
        }
        else{

            for (var i=0; i<mensagens.length;i++)
            {
                var mensagem = mensagens[i];

                mensagem.classList.remove("invisible");
            }
        }    
    });
});
  
