<?php


require_once 'connect.php';
require_once  'detectWinner.php';
header('Content-Type:application/json');
$input = json_decode(file_get_contents('php://input'), true);
$gameCode = $input['gameCode'];
$playerIp = $_SERVER['REMOTE_ADDR'];
$playersInGame = mysqli_num_rows(mysqli_query($connection, "SELECT players.id FROM games INNER JOIN players ON games.id=players.game_id WHERE code='$gameCode' AND is_in_game='1'"));
$whoCanMove=mysqli_fetch_assoc(mysqli_query($connection,"SELECT can_move,sign FROM games INNER JOIN players ON games.id=players.game_id WHERE player_ip='$playerIp'"));
$board=mysqli_fetch_assoc(mysqli_query($connection,"SELECT board_json FROM games WHERE code='$gameCode'"));
$winner=null;
$boardWithoutArtifacts=json_decode($board['board_json']);


    detectWinner($boardWithoutArtifacts, $winner);

if ($playersInGame == 2) {
    $data = [
        'isReady'=>true,
        'whoCanMove'=>$whoCanMove["can_move"],
        'board'=>$boardWithoutArtifacts,
        'sign'=>$whoCanMove["sign"],
        'winner'=>$winner
    ];

    echo json_encode($data);
} else {
    $data = [
        'isReady'=>false
    ];

    echo json_encode($data);

}
