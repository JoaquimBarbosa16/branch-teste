# 🚗 Peçaaq – Plataforma de Compra e Venda de Peças Automotivas

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-Controle%20de%20Vers%C3%A3o-black?style=for-the-badge)

**Peçaaq** é uma plataforma inovadora para **compra e venda de peças automotivas**, desenvolvida para tornar o processo mais rápido, seguro e intuitivo.  
Criada pela equipe **TechLabs**, o projeto foi desenvolvido no **curso Técnico em Informática** do **Colégio São Lucas**.

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

### 🧍 Tela de Cadastro de Usuário
- Campos: Nome, E-mail, Senha
- Validação de dados e prevenção de duplicidade

---

## 🗃️ Estrutura do Projeto

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

yaml
Copiar código

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

## 🧠 Metodologia Utilizada

O projeto foi desenvolvido seguindo **metodologia ágil (Scrum)**, com sprints e reuniões de acompanhamento, garantindo entregas rápidas e organizadas.

### 🧩 Papéis no Time:
- **Scrum Master:** Gabriel Bandasz  
- **Product Owner (PO):** Gabriel Sandes  
- **Desenvolvedores:** Pedro Flores, Lucas Matheus, Joaquim Guedes e Leonardo Schimmit  

---

## 🏫 Contexto Acadêmico

Projeto desenvolvido no **Curso Técnico em Informática** do **Colégio São Lucas**, com foco em desenvolvimento de sistemas web completos e integração front-end/back-end.

---

## 🏁 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/techlabs/Pecaaq.git
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

👨‍💻 Desenvolvedores
Nome	Função
Gabriel Bandasz	Scrum Master
Gabriel Sandes	Product Owner
Pedro Flores	Desenvolvedor
Lucas Matheus	Desenvolvedor
Joaquim Guedes	Desenvolvedor
Leonardo Schimmit	Desenvolvedor
