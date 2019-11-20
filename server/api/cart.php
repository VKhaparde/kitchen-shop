<?php

if ($request['method'] === 'GET') {
  if (!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
    send($response);
  }
else if ($request['method'] === 'POST') {
    if (!isset($request['body']['productId']) || !is_numeric($request['body']['productId'])) {
      throw new ApiError("Valid productId is required", 400);
    }
  }

    $link = get_db_link();
    print_r($link);
    $message = add_product_toCart($link);
    $response['body'] = $message;
    send($response);
    print("Session already started");

}

function add_product_toCart($link)
{
  $sql = 'SELECT * FROM carts';
  $link->query($sql);
  return 'Succesfully connected to mysql';
}
