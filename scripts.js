// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formContato').addEventListener('submit', async function(e) {
        e.preventDefault();
        let valido = true;

        document.getElementById('erro-nome').textContent = '';
        document.getElementById('erro-email').textContent = '';
        document.getElementById('erro-assunto').textContent = '';
        document.getElementById('erro-mensagem').textContent = '';
        document.getElementById('mensagem-sucesso').textContent = '';

        if (!document.getElementById('nome').value.trim()) {
            document.getElementById('erro-nome').textContent = 'Por favor preencha o campo Nome Completo';
            valido = false;
        }
        if (!document.getElementById('assunto').value.trim()) {
            document.getElementById('erro-assunto').textContent = 'Por favor preencha o campo Assunto';
            valido = false;
        }
        if (!document.getElementById('mensagem').value.trim()) {
            document.getElementById('erro-mensagem').textContent = 'Por favor preencha o campo Mensagem';
            valido = false;
        }

        function validarEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        const emailValor = document.getElementById('email').value.trim();
        if (!emailValor) {
            document.getElementById('erro-email').textContent = 'Por favor preencha o campo E-mail';
            valido = false;
        } else if (!validarEmail(emailValor)) {
            document.getElementById('erro-email').textContent = 'Por favor insira um e-mail válido';
            valido = false;
        }

        await fetch("https://profile-service.vercel.app/api/v1/formulario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: nome.value.trim(),
                email: email.value.trim(),
                assunto: assunto.value.trim(),
                mensagem: mensagem.value.trim(),
                destino: 'larissazamora123@gmail.com',

            })})

        if (valido) {
            document.getElementById('mensagem-sucesso').textContent = 'Formulário enviado com sucesso';
            document.getElementById('mensagem-sucesso').style.color = 'green';
            this.reset();    
            // Mantém a mensagem por 4 segundos
            setTimeout(function() {
                document.getElementById('mensagem-sucesso').textContent = '';
            }, 4000);
        } else {
            document.getElementById('mensagem-sucesso').textContent = '';
        }
    });
});
