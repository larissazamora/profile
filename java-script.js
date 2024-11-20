function validarFormulario(event) {
  //event.preventDefault()
  const nome = document.getElementById('nome').value;
  console.log(nome);
  const email = document.getElementById('email').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  const emailRegex = /\S+@\S+\.\S+/;

  if (nome === '') {
    document.getElementById('nomeError').textContent = "Por favor, preencha o campo nome.";
  } else {
    document.getElementById('nomeError').textContent = "";

  }

  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Por favor, insira um email válido.";
  } else {
    document.getElementById('emailError').textContent = "";
  }


  if (assunto === '') {
    document.getElementById('assuntoError').textContent = "Por favor, preencha o campo assunto.";
  } else {
    document.getElementById('assuntoError').textContent = "";
  }
}

if (mensagem === '') {
  document.getElementById('mensagemError').textContent = "Por favor, digite sua mensagem.";
} else {
  document.getElementById('mensagemError').textContent = "";
}


const formulario = document.getElementById('meuFormulario');
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    mensagemSucesso.style.display = 'block';

    // Ocultar a mensagem após 3 segundos
    setTimeout(() => {
        mensagemSucesso.style.display = 'none';
    }, 3000);
});














const email = "meu@email.com";
const regex = /\S+@\S+\.\S+/;
console.log(regex.test(email));

function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}