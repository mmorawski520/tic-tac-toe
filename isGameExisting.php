<?php
require_once 'connect.php';

$_POST = json_decode(array_keys($_POST)[0], true);
$gameCode = $_POST['gameCode'];
$sql=mysqli_num_rows(mysqli_query($connection,"SELECT * FROM games WHERE code='$gameCode'"));

if($sql>0){
    echo true;
}
else {
    echo false;
}
