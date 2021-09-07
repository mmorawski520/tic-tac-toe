<?php
    require_once '../general/connect.php';
    header('Content-Type:application/json');
    $input = json_decode(file_get_contents('php://input'), true);
    $gameCode = $input['gameCode'];

    $sql="UPDATE games  SET `board_json` = '[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]' WHERE code='$gameCode'";
    mysqli_query($connection,$sql);
