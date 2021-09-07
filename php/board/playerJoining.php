<?php
require_once '../general/connect.php';

$_POST = json_decode(array_keys($_POST)[0], true);
$playerIp = $_SERVER['REMOTE_ADDR'];
$gameCode = $_POST['gameCode'];
$gameId = mysqli_fetch_assoc(mysqli_query($connection, "SELECT id FROM games WHERE code='$gameCode'"));
$players = mysqli_query($connection, "SELECT * FROM players INNER JOIN games ON players.game_id=games.id WHERE code='$gameCode' ORDER BY players.id");
$host = $players->fetch_assoc();
$whoIsStarting = $host["can_move"] == 0 ? 1 : 0;
$sign = ($whoIsStarting == 1) ? "X" : "0";
$amountOfPlayers = mysqli_num_rows($players);
$checkIfPlayerExists = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM players INNER JOIN games ON players.game_id=games.id WHERE code='$gameCode' AND player_ip='$playerIp'"));
$changePlayerStatusSql = "UPDATE players INNER JOIN games ON players.game_id = games.id SET players.is_in_game = '1' WHERE player_ip='$playerIp' AND code='$gameCode'";
$AreUHost = $host["player_ip"] == $playerIp ? "host" : "guest";
$addNewPlayerSql = "INSERT INTO players(game_id,player_ip,player_type,is_in_game,can_move,sign) values('$gameId[id]','$playerIp','$AreUHost',1,'$whoIsStarting','$sign')";

if ($checkIfPlayerExists > 0) {
    mysqli_query($connection, $changePlayerStatusSql);
    echo "changed status";
} else {
    if ($amountOfPlayers < 2) {
        mysqli_query($connection, $addNewPlayerSql);
        echo "added new player";
    }
}