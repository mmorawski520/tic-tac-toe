<?php
require_once '../general/connect.php';

$_POST = json_decode(array_keys($_POST)[0], true);
$playerIp = $_SERVER['REMOTE_ADDR'];
$gameCode = $_POST['gameCode'];

$sql = "UPDATE players INNER JOIN games ON players.game_id = games.id SET players.is_in_game = '0' WHERE player_ip='$playerIp' AND code='$gameCode'";
mysqli_query($connection, $sql);
 