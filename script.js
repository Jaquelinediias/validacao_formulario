let validador = {
    identificadorSubmit:(event)=>{
      event.preventDefault();
      let enviar = true;

      let inputs = form.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
           let input = inputs[i];  
           let verificar = validador.verificarInpunt(input);
           if(verificar !== true){
              enviar = false;
              // exibir o erro
           }

        }
        enviar = false;

      if(enviar){
        form.submit();
      }
    },
    verificarInpunt:(input)=> {
        let regras = input.getAttribute('data-rules')
        if(regras !== null){
            regras = regras.split('|')
            for(let j in regras){
                let rDetalhes = regras[j].split('=')
                switch(rDetalhes[0]){
                    case 'required':

                    break

                }
            }
        }
    }
}
let form= document.querySelector('.validador');
form.addEventListener('submit', validador.identificadorSubmit)












/*O que a função split faz?
A função Split divide uma cadeia de texto em uma tabela de subcadeias. Use Split para dividir listas delimitadas por vírgula, datas que usam uma barra entre as partes da data e em outras situações em que um delimitador bem definido é usado. Uma cadeia de caracteres de separador é usada para dividir a cadeia de texto.
*/