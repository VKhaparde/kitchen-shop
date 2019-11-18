<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link);
  $response['body'] = $message;
  send($response);
}

function check_connection($link)
{
  $sql = 'SELECT productId,name,price,image,shortDescription FROM products';
  // $result = $link->query($sql);
  $result = mysqli_query($link,$sql);
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}
