<?php
require_once '../general/connect.php';

$input = json_decode(file_get_contents('php://input'), true);
$gameCode = $input['gameCode'];
$board = $input['board'];

$array=json_encode($board);
mysqli_query($connection,"UPDATE players
INNER JOIN games ON players.game_id = games.id
SET players.can_move = NOT players.can_move
WHERE code='$gameCode'");

mysqli_query($connection,"UPDATE games SET board_json='$array' WHERE code='$gameCode'");



$data = [
    'isReady'=>true,
    'whoCanMove'=>$whoCanMove["can_move"]
];

echo json_encode($data);