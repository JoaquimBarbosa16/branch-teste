<?php
// Produtos/listarProdutos.php
header('Content-Type: application/json; charset=utf-8');

// Config DB
$host = "localhost";
$user = "root";
$pass = "";
$db   = "pecaaq";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    // 1. Resposta JSON padronizada para erro (requerida pelo seu JS)
    echo json_encode(["status" => "erro", "mensagem" => "Falha na conexão com o banco de dados"]);
    exit;
}

// Ajuste da query conforme sua tabela 'produtos'
$sql = "SELECT id_produto, id_categoria, nome, sku_universal, marca, descricao_tecnica, foto_principal, preco, categoria, data_cadastro
        FROM produtos
        ORDER BY data_cadastro DESC";

$result = $conn->query($sql);
$produtos = [];

if ($result) {
    
    // 🖼️ CORREÇÃO E SIMPLIFICAÇÃO CRÍTICA DO CAMINHO DA IMAGEM:
    // O JS (no Dashboard/) precisa que o PHP retorne o caminho:
    // 1. Subir um nível (..)
    // 2. Entrar na pasta Produtos/uploads/
$uploadPath = '../../Produtos/uploads/';    while ($row = $result->fetch_assoc()) {
        
        $row['preco'] = isset($row['preco']) ? $row['preco'] : '0.00';

        if (!empty($row['foto_principal'])) {
            // AQUI ESTÁ A CORREÇÃO: Usa o caminho relativo simplificado
            $row['foto_principal'] = $uploadPath . $row['foto_principal'];
        } else {
            // Se a imagem padrão estiver na pasta raiz do Dashboard, use este caminho:
            $row['foto_principal'] = 'img/sem-imagem.png'; 
        }

        $produtos[] = $row;
    }
}

// 2. Resposta JSON padronizada para SUCESSO (requerida pelo seu JS)
echo json_encode(["status" => "ok", "produtos" => $produtos], JSON_UNESCAPED_UNICODE);
$conn->close();