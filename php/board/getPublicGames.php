<?php
require_once '../general/connect.php';

header('Content-Type:application/json');
$games = mysqli_query($connection, "SELECT code FROM games WHERE is_private=0  AND amount_of_players=1 ");
$codes = array();

$i = 1;
while ($row = mysqli_fetch_assoc($games)) {
    $codes [$i] = $row['code'];
    $i++;
}
$data = [
    'code' => $codes
];

echo json_encode($codes);