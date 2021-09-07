<?php
$server = "localhost";
$userName = "root";
$password = "";
$dbName = "tic-tac-toe";
$connection = mysqli_connect($server, $userName, $password, $dbName);


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");