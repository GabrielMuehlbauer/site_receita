// ============================================================================
// 1. BANCO DE DADOS LOCAL (Array de Objetos)
// ============================================================================
const listaReceitas = [
    {
        id: 1,
        titulo: "Frango Assado de Domingo",
        descricao: "Frango assado inteiro e descomplicado",
        categoria: "Almoço de Domingo",
        destaque: true, // Receita em destaque
        dificuldade: "Fácil",
        tempo: "30min",
        imagem: "assets/images/frango-assado.png",
        ingredientes: ["1 Frango inteiro", "4 dentes de alho", "Suco de 1 limão", "Manteiga", "Sal e ervas"],
        preparo: ["Tempere o frango", "Asse a 200°C por 1h30"],
        utensilios: "Assadeira",
        custo: "$$$",
        cozinha: "Brasileira"
    },
    {
        id: 2,
        titulo: "Bolo de Chocolate",
        descricao: "O clássico bolo fofinho com cobertura",
        categoria: "Bolos & Tortas",
        destaque: true, // Receita em destaque
        dificuldade: "Médio",
        tempo: "45min",
        imagem: "assets/images/bolo-de-chocolate.webp",
        ingredientes: ["3 ovos", "1 xícara de açúcar", "2 xícaras de farinha", "Chocolate em pó"],
        preparo: ["Bata os ovos", "Misture os secos", "Asse por 40min"],
        utensilios: "Batedeira",
        custo: "$",
        cozinha: "Internacional"
    },
    {
        id: 3,
        titulo: "Filé de Frango à Parmegiana",
        descricao: "Filé empanado crocante coberto com queijo",
        categoria: "Almoço de Família",
        dificuldade: "Médio",
        tempo: "50min",
        imagem: "assets/images/frango-a-parmegiana.webp",
        ingredientes: ["4 filés de frango", "Farinha e ovos para empanar", "Molho de tomate", "Mussarela"],
        preparo: ["Empane os filés", "Frite", "Cubra com molho e queijo", "Gratine no forno"],
        utensilios: "Frigideira, Assadeira",
        custo: "$$",
        cozinha: "Italiana"
    },
    {
        id: 4,
        titulo: "Salpicão de Frango",
        descricao: "Salada fria e crocante",
        categoria: "Entradas e Saladas",
        dificuldade: "Fácil",
        tempo: "20min",
        imagem: "assets/images/salpicao-de-frango.jpg",
        ingredientes: ["Frango desfiado", "Cenoura", "Milho", "Maionese", "Batata palha"],
        preparo: ["Misture tudo", "Gele por 30min", "Sirva com batata palha"],
        utensilios: "Tigela",
        custo: "$",
        cozinha: "Brasileira"
    },
    {
        id: 5,
        titulo: "Frango Xadrez",
        descricao: "Frango com pimentões e shoyu",
        categoria: "Jantar Oriental",
        dificuldade: "Médio",
        tempo: "35min",
        imagem: "assets/images/frango-xadrez.jpg",
        ingredientes: ["Frango em cubos", "Pimentões", "Amendoim", "Shoyu"],
        preparo: ["Frite o frango", "Refogue legumes", "Misture molho e amendoim"],
        utensilios: "Wok",
        custo: "$$",
        cozinha: "Chinesa"
    },
    {
        id: 6,
        titulo: "Galinhada Mineira",
        descricao: "Arroz com frango e açafrão",
        categoria: "Prato Único",
        dificuldade: "Médio",
        tempo: "45min",
        imagem: "assets/images/Galinha-Caipira-Mineira.jpg",
        ingredientes: ["Frango em pedaços", "Arroz", "Açafrão", "Legumes"],
        preparo: ["Frite o frango", "Adicione arroz e açafrão", "Cozinhe tudo junto"],
        utensilios: "Panela grande",
        custo: "$",
        cozinha: "Mineira"
    },
    {
        id: 7,
        titulo: "Strogonoff de Frango",
        descricao: "Cubos de frango em molho cremoso",
        categoria: "Jantar Rápido",
        dificuldade: "Fácil",
        tempo: "25min",
        imagem: "assets/images/strogonoff-de-frango.webp",
        ingredientes: ["Frango em cubos", "Creme de leite", "Ketchup", "Mostarda", "Champignon"],
        preparo: ["Doure o frango", "Adicione molhos", "Finalize com creme de leite"],
        utensilios: "Panela",
        custo: "$$",
        cozinha: "Russa/Brasileira"
    },
    {
        id: 8,
        titulo: "Costelinha Barbecue",
        descricao: "Costelinha suína na Air Fryer",
        categoria: "Carnes / Air Fryer",
        destaque: true, // Receita em destaque
        dificuldade: "Médio",
        tempo: "40min",
        imagem: "assets/images/costelinha-de-porco.webp",
        ingredientes: ["Costelinha suína", "Molho Barbecue", "Limão"],
        preparo: ["Tempere a carne", "Asse no papel alumínio", "Pincele barbecue e doure"],
        utensilios: "Air Fryer",
        custo: "$$",
        cozinha: "Americana"
    },
    {
        id: 9,
        titulo: "Picanha Fatiada",
        descricao: "Churrasco prático",
        categoria: "Churrasco / Air Fryer",
        dificuldade: "Fácil",
        tempo: "15min",
        imagem: "assets/images/picanha-fatiada.jpeg",
        ingredientes: ["Picanha fatiada", "Sal grosso"],
        preparo: ["Sele a carne na Air Fryer a 200°C por 10 min"],
        utensilios: "Air Fryer",
        custo: "$$$",
        cozinha: "Brasileira"
    },
    {
        id: 10,
        titulo: "Batata Rústica",
        descricao: "Batatas com alecrim crocantes",
        categoria: "Air Fryer",
        dificuldade: "Fácil",
        tempo: "25min",
        imagem: "assets/images/batata-rustica.webp",
        ingredientes: ["Batatas", "Alecrim", "Azeite", "Sal"],
        preparo: ["Corte as batatas", "Tempere", "Asse na Air Fryer até dourar"],
        utensilios: "Air Fryer",
        custo: "$",
        cozinha: "Variada"
    },
    {
        id: 11,
        titulo: "Filé de Tilápia",
        descricao: "Peixe leve com limão",
        categoria: "Peixes / Air Fryer",
        dificuldade: "Fácil",
        tempo: "15min",
        imagem: "assets/images/file-tilapia.jpg",
        ingredientes: ["Filé de tilápia", "Limão", "Ervas"],
        preparo: ["Tempere o peixe", "Asse a 180°C por 12 min"],
        utensilios: "Air Fryer",
        custo: "$$",
        cozinha: "Saudável"
    },
    {
        id: 12,
        titulo: "Pão de Queijo Rápido",
        descricao: "3 ingredientes apenas",
        categoria: "Lanche / Air Fryer",
        dificuldade: "Muito Fácil",
        tempo: "15min",
        imagem: "assets/images/pao-de-queijo.png",
        ingredientes: ["Creme de leite", "Queijo ralado", "Polvilho"],
        preparo: ["Misture tudo", "Faça bolinhas", "Asse até dourar"],
        utensilios: "Air Fryer",
        custo: "$",
        cozinha: "Mineira"
    },
    {
        id: 13,
        titulo: "Mini Pizza Rap10",
        descricao: "Pizza de frigideira em minutos",
        categoria: "Lanche Rápido",
        dificuldade: "Muito Fácil",
        tempo: "10min",
        imagem: "assets/images/pizza-de-rap10.jpeg",
        ingredientes: ["Massa Rap10", "Queijo", "Tomate", "Orégano"],
        preparo: ["Monte a pizza", "Aqueça na frigideira até o queijo derreter"],
        utensilios: "Frigideira",
        custo: "$",
        cozinha: "Prática"
    },
    {
        id: 14,
        titulo: "Sanduíche de Atum",
        descricao: "Lanche natural e saudável",
        categoria: "Lanche Frio",
        dificuldade: "Fácil",
        tempo: "10min",
        imagem: "assets/images/atum.jpg",
        ingredientes: ["Pão integral", "Atum", "Maionese", "Alface"],
        preparo: ["Faça o patê", "Monte o sanduíche"],
        utensilios: "Faca",
        custo: "$",
        cozinha: "Saudável"
    },
    {
        id: 15,
        titulo: "Torta de Limão",
        descricao: "Sobremesa clássica com merengue",
        categoria: "Sobremesas",
        destaque: true, // Receita em destaque
        dificuldade: "Médio",
        tempo: "40min",
        imagem: "assets/images/torta-limao.jpg",
        ingredientes: ["Biscoito", "Leite condensado", "Limão", "Claras"],
        preparo: ["Faça a base", "Bata o recheio", "Cubra com merengue"],
        utensilios: "Liquidificador",
        custo: "$$",
        cozinha: "Internacional"
    }
];

// ============================================================================
// 2. FUNÇÃO PARA EXIBIR CATEGORIAS NA HOME (index.html)
// ============================================================================
function carregarCategoriasHome() {
    // Procura o container das categorias na tela
    const container = document.getElementById("container-categorias");
    
    // Se não encontrar, significa que não estamos na Home, então para a função.
    if (!container) return;

    container.innerHTML = "";
    const categoriasUnicas = [];

    // Varre todas as receitas para descobrir quais categorias existem
    listaReceitas.forEach(receita => {
        // Separa categorias compostas (ex: "Carnes / Air Fryer" vira ["Carnes", "Air Fryer"])
        const cats = receita.categoria.split(' / ');
        
        cats.forEach(c => {
            const nome = c.trim(); // Remove espaços em branco extras
            // Se essa categoria ainda não foi adicionada à lista, adiciona agora
            if (!categoriasUnicas.find(item => item.nome === nome)) {
                categoriasUnicas.push({ nome: nome, imagem: receita.imagem });
            }
        });
    });

    // Cria o HTML (os cards) para cada categoria encontrada
    categoriasUnicas.forEach(cat => {
        container.innerHTML += `
            <a href="receitas.html?categoria=${encodeURIComponent(cat.nome)}" class="card-link">
                <div class="categoria-card">
                    <p>${cat.nome}</p>
                    <img src="${cat.imagem}" alt="${cat.nome}">
                </div>
            </a>
        `;
    });
}

// ============================================================================
// 3. FUNÇÃO PARA EXIBIR RECEITAS (receitas.html)
// ============================================================================
function exibirReceitas(receitasParaMostrar) {
    const container = document.getElementById("container-receitas");
    
    // Se não tem container, não estamos na página de receitas
    if (!container) return;

    container.innerHTML = "";

    // Se a lista estiver vazia (nenhum resultado encontrado)
    if (receitasParaMostrar.length === 0) {
        container.innerHTML = "<p>Nenhuma receita encontrada.</p>";
        return;
    }

    // Gera o card de cada receita
    receitasParaMostrar.forEach(receita => {
        // Se for destaque, pode adicionar uma classe extra (opcional)
        const classeDestaque = receita.destaque ? "card-destaque" : "";
        
        container.innerHTML += `
            <a href="detalhes.html?id=${receita.id}" class="card-link">
                <div class="card-receita ${classeDestaque}">
                    <div class="card-receita-content">
                        <img src="${receita.imagem}" alt="${receita.titulo}">
                        <h1>${receita.titulo}</h1>
                        <div class="detalhes-card-receita">
                            <p><b>Categoria:</b> ${receita.categoria}</p>
                            <p><b>Dificuldade:</b> ${receita.dificuldade}</p>
                            <p><b>Tempo:</b> ${receita.tempo}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;
    });
}

// ============================================================================
// 4. FUNÇÃO PARA EXIBIR DETALHES DA RECEITA (detalhes.html)
// ============================================================================
function carregarDetalhesReceita() {
    // Verifica se estamos na página de detalhes procurando por um elemento exclusivo dela
    const tituloDetalhe = document.getElementById("detalhe-titulo");
    if (!tituloDetalhe) return;

    // Pega o ID da receita que está na URL (ex: detalhes.html?id=5)
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    // Busca a receita correspondente no nosso "Banco de Dados"
    const receita = listaReceitas.find(r => r.id == id);

    if (receita) {
        // Preenche os textos e imagens na tela
        document.getElementById("detalhe-imagem").src = receita.imagem;
        document.getElementById("detalhe-titulo").textContent = receita.titulo;
        document.getElementById("detalhe-descricao").textContent = receita.descricao;
        document.getElementById("detalhe-categoria").textContent = receita.categoria;
        document.getElementById("detalhe-dificuldade").textContent = receita.dificuldade;
        document.getElementById("detalhe-tempo").textContent = receita.tempo;
        document.getElementById("detalhe-utensilios").textContent = receita.utensilios;
        document.getElementById("detalhe-custo").textContent = receita.custo;
        document.getElementById("detalhe-cozinha").textContent = receita.cozinha;

        // Preenche a lista de ingredientes
        const ul = document.getElementById("detalhe-lista-ingredientes");
        ul.innerHTML = "";
        receita.ingredientes.forEach(ing => ul.innerHTML += `<li>${ing}</li>`);

        // Preenche o modo de preparo
        const divPrep = document.getElementById("detalhe-modo-preparo");
        divPrep.innerHTML = "";
        receita.preparo.forEach((passo, i) => divPrep.innerHTML += `<p>${i + 1}. ${passo}</p>`);
    } else {
        document.querySelector(".receita-content").innerHTML = "<h1>Receita não encontrada.</h1>";
    }
}

// ============================================================================
// 5. LÓGICA DE PESQUISA GLOBAL
// ============================================================================
const barraPesquisa = document.querySelector(".barra-pesquisa");
const btnBuscar = document.querySelector(".search-container button");

// Função central que decide o que fazer quando busca
function realizarBusca() {
    const termo = barraPesquisa.value.trim();
    if (!termo) return; // Se vazio, não faz nada

    const containerReceitas = document.getElementById("container-receitas");

    if (containerReceitas) {
        // Se já estamos na página de receitas, apenas filtra a lista atual
        filtrarReceitas();
    } else {
        // Se estamos em outra página, redireciona levando o termo pesquisado
        window.location.href = `receitas.html?busca=${encodeURIComponent(termo)}`;
    }
}

// Função que faz a filtragem real dos dados
function filtrarReceitas() {
    const termo = barraPesquisa.value.toLowerCase();
    const receitasFiltradas = listaReceitas.filter(receita => {
        return receita.titulo.toLowerCase().includes(termo) || 
               receita.categoria.toLowerCase().includes(termo) ||
               receita.ingredientes.some(ing => ing.toLowerCase().includes(termo));
    });
    exibirReceitas(receitasFiltradas);
}

// Eventos da barra de pesquisa (Botão e Enter)
if (btnBuscar) {
    btnBuscar.addEventListener("click", (e) => {
        e.preventDefault();
        realizarBusca();
    });
}

if (barraPesquisa) {
    barraPesquisa.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            realizarBusca();
        }
    });
    
    // (Opcional) Filtra em tempo real se já estiver na página de lista
    barraPesquisa.addEventListener("input", () => {
        if (document.getElementById("container-receitas")) {
            filtrarReceitas();
        }
    });
}

// ============================================================================
// 6. INICIALIZAÇÃO (Roda quando a página carrega)
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Tenta carregar coisas da Home
    carregarCategoriasHome();
    
    // Tenta carregar detalhes da receita
    carregarDetalhesReceita();

    // Se estiver na página de listagem de receitas, verifica filtros na URL
    const containerReceitas = document.getElementById("container-receitas");
    if (containerReceitas) {
        const params = new URLSearchParams(window.location.search);
        const categoriaUrl = params.get("categoria");
        const buscaUrl = params.get("busca");
        const destaqueUrl = params.get("destaque");

        if (destaqueUrl) {
            // Filtra apenas os destaques (clique no banner da home)
            const destaques = listaReceitas.filter(r => r.destaque === true);
            exibirReceitas(destaques);
            if(barraPesquisa) barraPesquisa.placeholder = "Exibindo Destaques...";

        } else if (categoriaUrl) {
            // Filtra pela categoria (clique no card da home)
            const filtradas = listaReceitas.filter(r => r.categoria.includes(categoriaUrl));
            exibirReceitas(filtradas);
            if (barraPesquisa) barraPesquisa.value = categoriaUrl;
        
        } else if (buscaUrl) {
            // Filtra pela busca (vinda de outra página)
            if (barraPesquisa) barraPesquisa.value = buscaUrl;
            filtrarReceitas();
        
        } else {
            // Se não tiver filtro nenhum, mostra todas
            exibirReceitas(listaReceitas);
        }
    }
});

// ============================================================================
// 7. LÓGICA DO MENU LATERAL
// ============================================================================
const sideMenu = document.querySelector(".side-menu");
const menuButton = document.querySelector(".menu-button");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        sideMenu.style.left = sideMenu.style.left === "0px" ? "-340px" : "0px";
    });

    document.addEventListener("click", (event) => {
        const isClickInsideMenu = sideMenu.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);

        if (sideMenu.style.left === "0px" && !isClickInsideMenu && !isClickOnMenuButton) {
            sideMenu.style.left = "-340px";
        }
    });
}