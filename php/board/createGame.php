<?php
require_once '../general/connect.php';

$_POST = json_decode(array_keys($_POST)[0], true);
$isStarting = $_POST['isStarting'];
$isPrivate = $_POST['isPrivate'];
$hostPlayerIp = $_SERVER['REMOTE_ADDR'];
$gameCode="g".substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 6);
$sign= ($isStarting==1)?"X":"0";
$createBoardQuery = "INSERT INTO games(code,status,created_at,amount_of_players,is_host_starting,is_private) values('$gameCode','active','NOW()',1,'$isStarting','$isPrivate')";

if(mysqli_query($connection,$createBoardQuery)){
    $gameId = mysqli_insert_id($connection);
    $createHostPlayerQuery="INSERT INTO players(game_id,player_ip,player_type,is_in_game,can_move,sign) values('$gameId','$hostPlayerIp','host','1','$isStarting','$sign')";
    mysqli_query($connection,$createHostPlayerQuery);
    echo $gameCode;
}
