document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // MODO CLARO / ESCURO 
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
});