# 🚗 Peçaaq – Plataforma de Compra e Venda de Peças Automotivas



**Peçaaq** é uma plataforma inovadora para **compra e venda de peças automotivas**, desenvolvida para tornar o processo mais rápido, seguro e intuitivo.  
Criada pela equipe **TechLabs**, o projeto foi desenvolvido no **curso Técnico em Informática** do **Colégio São Lucas**.
---

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-Controle%20de%20Vers%C3%A3o-black?style=for-the-badge)
---

## 🚀 Objetivo do Projeto

O Peçaaq tem como objetivo **facilitar o comércio de peças automotivas**, permitindo que usuários cadastrem produtos, vendam e encontrem peças com rapidez, além de oferecer uma interface moderna e responsiva.

---

## 📌 Funcionalidades

- [x] Cadastro de usuários com login seguro  
- [x] Cadastro de produtos (peças automotivas)  
- [x] Edição e exclusão de produtos cadastrados  
- [x] Busca e filtragem de produtos  
- [x] Cadastro de empresa
- [x] DashBoard de usuário e empresa
---

## 🖥️ Telas do Sistema
--lucas coloca aqui o wireframe
---

## 🗃️ Estrutura do Projeto
```
Pecaaq/
├── Cadastrar/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
├── Comprar/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistemaL
├── DashBoard/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
├── LandingPage/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
├── Login/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
├── PerfilCliente/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
├── Sobre/
│ ├── js/ # Scripts JavaScript para funcionalidades
│ ├── css/ # Arquivos de estilo CSS
│ ├── php/ # Arquivos PHP para conexão e CRUD com MySQL
│ └── html/ # Páginas HTML do sistema
└── README.md # Documentação do projeto
```
---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|-----------|-------------|
| **Front-end** | HTML5, CSS3, JavaScript (ES6) |
| **Back-end** | PHP 7+ |
| **Banco de Dados** | MySQL |
| **Controle de Versão** | Git / GitHub |
| **Design** | Responsivo, layout moderno |

---

## 🧩 Funcionalidades Principais

- Sistema de cadastro e login de usuários  
- CRUD completo de produtos  
- Listagem e pesquisa de peças  
- Integração com WhatsApp para contato direto  
- Layout moderno, responsivo e amigável  
- Validação de campos e tratamento de erros  

---

## 🗄️ Banco de dados
```sql
CREATE DATABASE IF NOT EXISTS pecaaq;
USE pecaaq;

-- Tabela de usuários
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('Cliente','Fornecedor','Admin') DEFAULT 'Cliente',
  nome_razao_social VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  documento VARCHAR(30),
  telefone VARCHAR(30),
  data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de fornecedores
CREATE TABLE fornecedores (
  id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario_representante INT,
  nome_fantasia VARCHAR(150) NOT NULL,
  razao_social VARCHAR(200),
  cnpj VARCHAR(18),
  email_comercial VARCHAR(150),
  telefone_comercial VARCHAR(30),
  logo_url VARCHAR(255),
  status ENUM('em_aprovacao','ativo','inativo') DEFAULT 'em_aprovacao',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario_representante) REFERENCES usuarios(id_usuario) ON DELETE SET NULL
);

-- Tabela de categorias
CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  id_categoria_pai INT,
  FOREIGN KEY (id_categoria_pai) REFERENCES categorias(id_categoria) ON DELETE SET NULL
);

-- Tabela de produtos
CREATE TABLE produtos (
  id_produto INT AUTO_INCREMENT PRIMARY KEY,
  id_categoria INT,
  id_usuario INT NOT NULL,
  nome VARCHAR(250) NOT NULL,
  sku_universal VARCHAR(120),
  marca VARCHAR(100),
  descricao_tecnica TEXT,
  foto_principal VARCHAR(255),
  preco VARCHAR(250) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE SET NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Tabela produto_fornecedor
CREATE TABLE produto_fornecedor (
  id_produto INT,
  id_fornecedor INT,
  codigo_fornecedor VARCHAR(100),
  PRIMARY KEY (id_produto, id_fornecedor),
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto) ON DELETE CASCADE,
  FOREIGN KEY (id_fornecedor) REFERENCES fornecedores(id_fornecedor) ON DELETE CASCADE
);

-- Tabela de veículos
CREATE TABLE veiculos (
  id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
  montadora VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  versao VARCHAR(100),
  ano_inicio INT,
  ano_fim INT,
  motorizacao VARCHAR(100)
);

-- Tabela produto_veiculo
CREATE TABLE produto_veiculo (
  id_produto INT,
  id_veiculo INT,
  observacao VARCHAR(255),
  PRIMARY KEY (id_produto, id_veiculo),
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto) ON DELETE CASCADE,
  FOREIGN KEY (id_veiculo) REFERENCES veiculos(id_veiculo) ON DELETE CASCADE
);

-- Tabela de anúncios
CREATE TABLE anuncio (
  id_anuncio INT AUTO_INCREMENT PRIMARY KEY,
  id_fornecedor INT NOT NULL,
  id_produto INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  quantidade_estoque INT DEFAULT 0,
  condicao ENUM('Novo','Usado','Remanufaturado') DEFAULT 'Novo',
  status ENUM('Ativo','Pausado','Esgotado') DEFAULT 'Ativo',
  data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  descricao TEXT,
  referencia VARCHAR(100),
  imagem_url VARCHAR(255),
  FOREIGN KEY (id_fornecedor) REFERENCES fornecedores(id_fornecedor) ON DELETE CASCADE,
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

-- Tabela de carrinhos
CREATE TABLE carrinho (
  id_carrinho INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

-- Tabela de itens do carrinho
CREATE TABLE carrinho_itens (
  id_item INT AUTO_INCREMENT PRIMARY KEY,
  id_carrinho INT NOT NULL,
  id_anuncio INT NOT NULL,
  quantidade INT NOT NULL,
  preco_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_carrinho) REFERENCES carrinho(id_carrinho) ON DELETE CASCADE,
  FOREIGN KEY (id_anuncio) REFERENCES anuncio(id_anuncio)
);

-- Tabela de pedidos
CREATE TABLE pedidos (
  id_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario_comprador INT NOT NULL,
  data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'AguardandoPagamento',
  valor_total DECIMAL(10,2) DEFAULT 0.00,
  valor_frete DECIMAL(10,2) DEFAULT 0.00,
  endereco_entrega_id INT,
  observacoes TEXT,
  FOREIGN KEY (id_usuario_comprador) REFERENCES usuarios(id_usuario)
);

-- Tabela de itens do pedido
CREATE TABLE itens_pedido_produto (
  id_item INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  preco_unitario_venda DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido) ON DELETE CASCADE,
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
```

## 🧠 Metodologia Utilizada

O projeto foi desenvolvido seguindo **metodologia ágil (Scrum)**, com sprints e reuniões de acompanhamento, garantindo entregas rápidas e organizadas.

---

## 🏫 Contexto Acadêmico

Projeto desenvolvido no **Curso Técnico em Informática** do **Colégio São Lucas**, com foco em desenvolvimento de sistemas web completos e integração front-end/back-end.

---

## 🏁 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/techlabs/Pecaaq.git

````
Configure o banco de dados MySQL:

Crie um banco chamado pecaaq

Importe o arquivo pecaaq.sql presente na pasta /database

Atualize as credenciais no arquivo PHP:

php
Copiar código
$host = "localhost";
$user = "root";
$password = "";
$db   = "pecaaq";
Abra o projeto no navegador através de um servidor local (XAMPP, WAMP ou similar).
`````
## 👨‍💻 Autores

- Scrum Master: Gabriel Bandasz
- Product Owner (PO): Gabriel Sandes
- Desenvolvedores (DEVs):
- Pedro Flores
- Lucas Matheus
