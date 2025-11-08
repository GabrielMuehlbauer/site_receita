// Simple registration and login using localStorage


function showMessage(text, isError = false) {
  const el = document.getElementById('mensagem');
  if (!el) return;
  el.textContent = text;
  el.style.color = isError ? 'crimson' : 'green';
}

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem('users') || '[]');
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Cadastro
const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
  cadastroForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = form.nome.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const data_nascimento = form.data_nascimento.value;
    const cep = form.cep.value.trim();
    const genero = form.genero.value;
    const senha = form.senha.value;

    if (!nome || !email || !senha) {
      showMessage('Por favor preencha os campos obrigatórios.', true);
      return;
    }

    const users = loadUsers();
    if (users.some(u => u.email === email)) {
      showMessage('Um usuário com esse e-mail já existe.', true);
      return;
    }

    const newUser = { nome, email, data_nascimento, cep, genero, senha };
    users.push(newUser);
    saveUsers(users);

    showMessage('Cadastro realizado com sucesso! Você pode entrar agora.');
    // Optionally redirect to login after a short delay
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim().toLowerCase();
    const senha = form.senha.value;

    const users = loadUsers();
    const user = users.find(u => u.email === email && u.senha === senha);

    if (!user) {
      showMessage('E-mail ou senha incorretos.', true);
      return;
    }

    showMessage('Login efetuado com sucesso! Redirecionando...');
    // Store a simple logged-in flag (for demo purposes only)
    localStorage.setItem('currentUser', JSON.stringify({ nome: user.nome, email: user.email }));
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  });
}

// If on index and user logged in, show welcome (optional enhancement)
(function showWelcome() {
  const el = document.getElementById('mensagem');
  if (!el) return;
  try {
    const cur = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (cur) {
      el.textContent = `Olá, ${cur.nome}! Você está logado.`;
      el.style.color = 'green';
    }
  } catch (e) {
    // ignore
  }
})();
