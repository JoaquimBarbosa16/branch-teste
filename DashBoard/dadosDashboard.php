<?php
header('Content-Type: application/json; charset=utf-8');

$servidor = "localhost";
$usuario  = "root";
$senha    = "";
$banco    = "pecaaq";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    echo json_encode(['status' => 'erro', 'msg' => 'Erro de conexão']);
    exit;
}

/* TOTAL DE PRODUTOS */
$sqlProdutos = "SELECT COUNT(*) AS total_produtos FROM produtos";
$resProdutos = $conn->query($sqlProdutos);
$totalProdutos = $resProdutos->fetch_assoc()['total_produtos'];

/* TOTAL DE ANÚNCIOS */
$sqlAnuncios = "SELECT COUNT(*) AS total_anuncios FROM anuncio";
$resAnuncios = $conn->query($sqlAnuncios);
$totalAnuncios = $resAnuncios->fetch_assoc()['total_anuncios'];

echo json_encode([
    'status' => 'ok',
    'produtos' => $totalProdutos,
    'anuncios' => $totalAnuncios
]);

$conn->close();
?>
