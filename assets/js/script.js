// funções login e cadastro
// Cadastro de usuário
document.getElementById('cadastroForm').addEventListener('submit', function(e){
  e.preventDefault();
  
  const usuario = {
    nome: this.nome.value,
    email: this.email.value,
    data_nascimento: this.data_nascimento.value,
    cep: this.cep.value,
    genero: this.genero.value,
    senha: this.senha.value
  };
  
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  // verifica se já existe o usuário pelo e-mail
  if (usuarios.some(u => u.email === usuario.email)) {
    document.getElementById('mensagem').innerText = 'E-mail já cadastrado!';
    return;
  }
  
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  document.getElementById('mensagem').innerText = 'Usuário cadastrado com sucesso!';
  this.reset();
});

// Login de usuário
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = this.email.value;
  const senha = this.senha.value;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if(usuario){
    document.getElementById('mensagem').innerText = 'Login realizado com sucesso!';
    // Aqui pode redirecionar ou mostrar receitas conforme sua necessidade
  } else {
    document.getElementById('mensagem').innerText = 'E-mail ou senha incorretos.';
  }
  this.reset();
});
