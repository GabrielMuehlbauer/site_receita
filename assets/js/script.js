// assets/js/script.js

// --- Event Listener para o formulário de CADASTRO DE USUÁRIO ---
const formCadastro = document.getElementById("register-form");
const msgConfirmacaoCadastro = document.getElementById("confirmacao-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        // 1. Coletar dados do formulário
        const data = {
            nome: document.getElementById("input-name-register").value,
            email: document.getElementById("input-email-register").value,
            data_nascimento: document.getElementById("input-date-register").value,
            cep: document.getElementById("input-cep-register").value,
            genero: document.getElementById("input-genero-register").value,
            senha: document.getElementById("input-password-register").value
        };

        // 2. Enviar dados para o Backend (Node.js)
        try {
            const response = await fetch("http://localhost:3000/cadastrar-usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // 3. Mostrar mensagem de sucesso (ou erro)
            msgConfirmacaoCadastro.textContent = result.message;
            if (response.ok) {
                msgConfirmacaoCadastro.style.color = "green";
                formCadastro.reset(); // Limpa o formulário
            } else {
                msgConfirmacaoCadastro.style.color = "red";
            }

        } catch (error) {
            msgConfirmacaoCadastro.textContent = "Erro de conexão com o servidor.";
            msgConfirmacaoCadastro.style.color = "red";
        }
    });
}

// --- Event Listener para o formulário de CATEGORIA (Página Admin) ---
const formCategoria = document.getElementById("admin-categoria-form");
const msgConfirmacaoCategoria = document.getElementById("confirmacao-categoria");

if (formCategoria) {
    formCategoria.addEventListener("submit", async (event) => {
        event.preventDefault();
        const nomeCategoria = document.getElementById("categoria-nome").value;

        try {
            const response = await fetch("http://localhost:3000/cadastrar-categoria", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome_categoria: nomeCategoria }),
            });

            const result = await response.json();
            msgConfirmacaoCategoria.textContent = result.message;
            if (response.ok) {
                msgConfirmacaoCategoria.style.color = "green";
                formCategoria.reset();
            } else {
                msgConfirmacaoCategoria.style.color = "red";
            }
        } catch (error) {
            msgConfirmacaoCategoria.textContent = "Erro de conexão com o servidor.";
            msgConfirmacaoCategoria.style.color = "red";
        }
    });
}


// --- Event Listener para o formulário de REFEIÇÃO (Página Admin) ---
const formRefeicao = document.getElementById("admin-refeicao-form");
const msgConfirmacaoRefeicao = document.getElementById("confirmacao-refeicao");

if (formRefeicao) {
    formRefeicao.addEventListener("submit", async (event) => {
        event.preventDefault();
        const nomeRefeicao = document.getElementById("refeicao-nome").value;

        try {
            const response = await fetch("http://localhost:3000/cadastrar-refeicao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome_refeicao: nomeRefeicao }),
            });

            const result = await response.json();
            msgConfirmacaoRefeicao.textContent = result.message;
            if (response.ok) {
                msgConfirmacaoRefeicao.style.color = "green";
                formRefeicao.reset();
            } else {
                msgConfirmacaoRefeicao.style.color = "red";
            }
        } catch (error) {
            msgConfirmacaoRefeicao.textContent = "Erro de conexão com o servidor.";
            msgConfirmacaoRefeicao.style.color = "red";
        }
    });
}