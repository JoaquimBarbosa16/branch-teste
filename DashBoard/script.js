document.addEventListener("DOMContentLoaded", () => {

    /* ============================
          TROCAR ENTRE AS SEÇÕES
    ============================= */
    const links = document.querySelectorAll(".sidebar nav a");
    const secDashboard = document.getElementById("sec-dashboard");
    const secPerfil = document.getElementById("sec-perfil");
    const secAdicionar = document.getElementById("sec-adicionar");

    links.forEach((link, index) => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Esconde todas as seções
            secDashboard.style.display = "none";
            secPerfil.style.display = "none";
            secAdicionar.style.display = "none";

            // Remove a classe 'active' de todos os links e adiciona ao clicado
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Exibe a seção correspondente
            if (index === 0) secDashboard.style.display = "block";
            if (index === 1) secPerfil.style.display = "block";
            if (index === 2) secAdicionar.style.display = "block";
        });
    });

    /* ============================
              LISTAR PRODUTOS
    ============================= */
    async function listarProdutos() {
        try {
            const resp = await fetch("listarProdutos.php");
            const json = await resp.json();

            // ⚠️ Verificação obrigatória do status do PHP
            if (json.status !== "ok") {
                console.error("Erro ao listar produtos:", json.mensagem || "Resposta inválida do servidor.");
                return;
            }

            const lista = document.getElementById("lista-produtos");
            lista.innerHTML = "";

            json.produtos.forEach(produto => {
                // Renderiza a imagem, nome e preço na tabela
                lista.innerHTML += `
                    <tr>
                        <td><img src="${produto.foto_principal}" width="60" style="border-radius:6px; object-fit: cover;"></td>
                        <td>${produto.nome}</td>
                        <td>R$ ${parseFloat(produto.preco).toFixed(2)}</td>
                    </tr>
                `;
            });

            // Atualiza a contagem de produtos em estoque
            document.getElementById("totalProdutos").textContent = json.produtos.length; 

        } catch (erro) {
            console.error("Erro ao carregar produtos:", erro);
        }
    }

    /* ============================
              CADASTRAR PRODUTO
    ============================= */
    const form = document.getElementById("formProduto");
    const fotoPreview = document.getElementById("fotoPreview");

    if (form) {
        form.addEventListener("submit", async event => {
            event.preventDefault();

            const formData = new FormData(form);

            try {
                const resp = await fetch("processaProduto.php", {
                    method: "POST",
                    body: formData
                });

                const json = await resp.json();

                if (json.status === "ok") {
                    alert("Produto cadastrado com sucesso!");
                    form.reset();
                    if (fotoPreview) fotoPreview.innerHTML = "<span>+</span>";
                    listarProdutos(); // Recarrega a lista
                } else {
                    alert("Erro ao cadastrar: " + (json.message || "Verifique o arquivo processaProduto.php")); 
                }

            } catch (erro) {
                console.error("Erro ao cadastrar produto:", erro);
                alert("Erro de conexão ao cadastrar produto.");
            }
        });
    }

    /* ============================
                PREVIEW FOTO
    ============================= */
    const inputFoto = document.getElementById("foto");

    if (inputFoto && fotoPreview) {
        inputFoto.addEventListener("change", e => {
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = ev => {
                    fotoPreview.innerHTML =
                        `<img src="${ev.target.result}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
                };
                reader.readAsDataURL(file);
            } else {
                fotoPreview.innerHTML = "<span>+</span>";
            }
        });
    }

    /* ============================
              FILTRO DE PESQUISA
    ============================= */
    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("input", event => {
            const termo = event.target.value.toLowerCase();

            document.querySelectorAll("#lista-produtos tr").forEach(tr => {
                const nome = tr.children[1].textContent.toLowerCase();
                tr.style.display = nome.includes(termo) ? "" : "none";
            });
        });
    }

    /* ============================
              GRÁFICO VENDAS
    ============================= */
    const graficoVendas = document.getElementById("graficoVendas");

    if (graficoVendas) {
        new Chart(graficoVendas, {
            type: "bar",
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [
                    { label: "Vendas", data: [300, 400, 350, 500, 480, 600, 580, 540, 570, 610, 620, 630], backgroundColor: "limegreen" },
                    { label: "Itens", data: [200, 250, 240, 300, 280, 350, 340, 320, 330, 360, 370, 380], backgroundColor: "red" }
                ]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    }

    /* ============================
              PERFIL DINÂMICO
    ============================= */
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {
        const setText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        // Dados do Header e Perfil
        setText("headerEmpresaNome", usuario.nome_empresa);
        setText("perfilNomeEmpresa", usuario.nome_empresa);
        setText("perfilCNPJ", "CNPJ: " + (usuario.cnpj || "---"));
        setText("perfilEmail", usuario.email || "---");
        setText("perfilTelefone", usuario.telefone || "---");
        
        // Trata IDs duplicados (se existirem)
        document.querySelectorAll('#perfilEndereco').forEach(el => el.textContent = usuario.endereco || 'Endereço...');
        document.querySelectorAll('#perfilCategoria').forEach(el => el.textContent = usuario.categoria || 'Categoria...');
    }

    /* ============================
                  SAIR
    ============================= */
    // ⚠️ Caminho para o login. Se estiver dando 'Not Found', tente um caminho relativo como: "../Login/indexLogin.html"
    const URL_LOGIN = "http://localhost/branch-teste-main/Login/indexLogin.html"; 

    function sair() {
        console.log("Logout iniciado. Redirecionando para:", URL_LOGIN);
        localStorage.removeItem("usuarioLogado");
        window.location.href = URL_LOGIN;
    }

    const btnSair = document.getElementById("btnSair"); // Botão do Perfil
    const btnSidebarSair = document.getElementById("btnSidebarSair"); // Botão do Sidebar

    // Adiciona listener se o elemento existir (garantia contra erro no console)
    if (btnSair) btnSair.addEventListener("click", sair);
    if (btnSidebarSair) btnSidebarSair.addEventListener("click", sair);

    /* ============================
                DASHBOARD
    ============================= */
    async function carregarDashboard() {
        try {
            const resp = await fetch("dadosDashboard.php");
            const json = await resp.json();

            if (json.status === "ok") {
                // Atualiza cards que não são do total de produtos
                document.getElementById("cardTotalProdutos").textContent = json.produtos;
                document.getElementById("cardTotalAnuncios").textContent = json.anuncios;
            }

        } catch (erro) {
            console.error("Erro ao carregar dadosDashboard.php:", erro);
        }
    }

    /* ============================
              INICIAR PÁGINA
    ============================= */
    // Inicia o carregamento dos dados
    listarProdutos();
    carregarDashboard();

});