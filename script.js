let validador = {
  identificadorSubmit:(event)=>{
    event.preventDefault();
    let enviar = true;

    let inputs = form.querySelectorAll('input')

    validador.limparErros();


    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];  
      let verificar = validador.verificarInpunt(input);
      if(verificar !== true) {
        enviar = false;
        validador.mostrarError(input, verificar)
      }

    }

    if(enviar) {
    form.submit();
    }

  },
  verificarInpunt:(input)=> {
    let regras = input.getAttribute('data-rules')

    if(regras !== null) {
      regras = regras.split('|')
      for(let j in regras) {
        let rDetalhes = regras[j].split('=')

        switch(rDetalhes[0]){
          case 'required':
            if(input.value === ''){
              return'Campo Obrigatório!'
            }
          break;
          case 'min':
            if(input.value.length< rDetalhes[1]){
              return 'Campo conte pelo no máximo 8 '+rDetalhes[1]+'caracteres'
            }
          break;
          case 'email':
            if(input.value != ''){
              let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
              if(!regex.test(input.value.toLowerCase())){
                return'E-mail digitado não é valido!'
              }
            }
          break
        }
      }
    }
    return true;
  },
  mostrarError:(input,error)=> {
    input.style.borderColor = '#ff0000'

    let errorElement = document.createElement('div')
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling)

  },
  limparErros:()=>{
    let inputs = form.querySelectorAll('input');
    for(let i= 0; i < inputs.length; i++) {
      inputs[i].style = ''
      
    }

    let errorElements = document.querySelectorAll('.error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }

  }
}
let form= document.querySelector('.validador');
form.addEventListener('submit', validador.identificadorSubmit)












/*O que a função split faz?
A função Split divide uma cadeia de texto em uma tabela de subcadeias. Use Split para dividir listas delimitadas por vírgula, datas que usam uma barra entre as partes da data e em outras situações em que um delimitador bem definido é usado. Uma cadeia de caracteres de separador é usada para dividir a cadeia de texto.
*/