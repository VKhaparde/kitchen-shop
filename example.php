<?php
// $firstname = 'Tim';
// $lastname = 'Davis';
// $fullname = $firstname.' '.$lastname;
// for($i=0;$i<10;$i++){
// print($fullname);
// print("\n");

$db_connection = mysqli_connect('localhost','root','root','wickedSales');
print_r($db_connection);
$sql = 'SELECT * FROM `products`';
$result = $db_connection->query($sql);
$prod_data = $result->fetch_all(MYSQLI_ASSOC);
$prod_json = json_encode($prod_data);
print_r($prod_json);
