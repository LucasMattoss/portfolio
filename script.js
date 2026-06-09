document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // MODO CLARO / ESCURO (Seu código original)
    // ==========================================
    const botaoTema = document.getElementById('botao-tema');
    const body = document.body;

    if (localStorage.getItem('tema') === 'claro') {
        body.classList.add('modo-claro');
        if (botaoTema) botaoTema.textContent = ' Modo Escuro';
    }

    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            body.classList.toggle('modo-claro');
            
            if (body.classList.contains('modo-claro')) {
                botaoTema.textContent = ' Modo Escuro';
                localStorage.setItem('tema', 'claro');
            } else {
                botaoTema.textContent = ' Modo Claro';
                localStorage.setItem('tema', 'escuro');
            }
        });
    }

    // ==========================================
    // ENVIO DO FORMULÁRIO (FormSubmit via AJAX)
    // ==========================================
    const formulario = document.getElementById('formulario-contato');

    if (formulario) {
        formulario.addEventListener('submit', async (event) => {
            event.preventDefault(); // Impede que a página recarregue/redirecione

            const botaoEnviar = formulario.querySelector('.botao-enviar');
            const textoOriginal = botaoEnviar.textContent;

            // Muda o texto do botão para dar feedback visual ao usuário
            botaoEnviar.textContent = 'Enviando...';
            botaoEnviar.disabled = true;
            botaoEnviar.style.cursor = 'wait';

            // Pega todos os dados digitados no formulário
            const formData = new FormData(formulario);

            try {
                // ATENÇÃO: Note o "/ajax/" na URL, ele é obrigatório para não redirecionar a página
                const resposta = await fetch('https://formsubmit.co/ajax/lucasmattos2311@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                });

                if (resposta.ok) {
                    // Se deu certo, avisa o usuário e limpa os campos
                    alert('Sua mensagem foi enviada com sucesso! Responderei em breve.');
                    formulario.reset(); 
                } else {
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                }
            } catch (erro) {
                console.error('Erro no envio:', erro);
                alert('Erro de conexão. Verifique sua internet e tente novamente.');
            } finally {
                // Volta o botão ao normal, independentemente de ter dado certo ou erro
                botaoEnviar.textContent = textoOriginal;
                botaoEnviar.disabled = false;
                botaoEnviar.style.cursor = 'pointer';
            }
        });
    }
});