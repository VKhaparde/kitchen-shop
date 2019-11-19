<?php

if ($request['method'] === 'GET' && $request['query']['productId']) {
  if (isset($request['query']['productId'])) {
    if (!is_numeric($request['query']['productId'])) {
      throw new ApiError("Invalid ProductId", 400);
    }
    if (!$request['query']['productId']) {
      throw new ApiError("Product does not exist", 404);
    }
    $productId = $request['query']['productId'];
  }
  $link = get_db_link();
  $message = get_product_data($link,$productId);
  $response['body'] = $message;
  send($response);
}
else if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link);
  $response['body'] = $message;
  send($response);
}

function check_connection($link)
{
  $sql = 'SELECT productId,name,price,image,shortDescription FROM products ';
  // $result = $link->query($sql);
  $result = mysqli_query($link, $sql);
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

function get_product_data($link,$productId){
  $sql = "SELECT * FROM products WHERE productId =$productId";
  $result = mysqli_query($link,$sql);
  return mysqli_fetch_assoc($result);
}
