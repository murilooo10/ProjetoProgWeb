$(document).ready(function (){ 

    $("#campoBusca").keyup(function (){

        let mensagens = document.querySelectorAll(".mensagem");
        
        console.log(mensagens);
        
        
        let assunto_Recebido = $("#campoBusca").val();

        if (assunto_Recebido.length > 0)
        {

        
            for(let i=0; i<mensagens.length; i++)
            {
                mensagem = mensagens[i];
                let assuntotemp = mensagem.querySelector("#assunto");
                let assunto = assuntotemp.textContent;
                let expresssao = new RegExp(this.value,"i");
                if(!expresssao.test(assunto.trim())){
                    mensagem.classList.add("invisible");
                }else{        
                    mensagem.classList.remove("invisible");
                }
            }
        }
        else{

            for (let i=0; i<mensagens.length;i++)
            {
                let mensagem = mensagens[i];

                mensagem.classList.remove("invisible");
            }
        }    
    });
});
  
