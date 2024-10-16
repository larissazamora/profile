function validarFormulario () {
    const nome = document.getElementById('nome').value;
    console.log(nome);
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const emailRegex = /\S+@\S+\.\S+/;
    if (nome === '') {
        document.getElementById('nomeError').textContent = "Por favor, preencha o campo nome.";
        return false;
      } else {
        document.getElementById('nomeError').textContent = "";
      }

      if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Por favor, insira um email válido.";
        return false;
      } else {
        document.getElementById('emailError').textContent = "";
      }
    }
    










const email = "meu@email.com";
const regex = /\S+@\S+\.\S+/;
console.log(regex.test(email));

function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}