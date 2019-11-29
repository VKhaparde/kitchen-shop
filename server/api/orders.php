<?php
session_start();
if ($request['method'] === 'POST') {
  if (!$_SESSION['cart_id']) {
    throw new ApiError('Active Shopping Cart is Required', 400);
  } else{
    if (!$request['body']['name'] || !$request['body']['creditCard'] || !$request['body']['shippingAddress']) {
      throw new ApiError('Customer name /creditCard /shippingAddress might be missing', 400);
    }
    $link = get_db_link();
    $message = place_order($link);
    $response['body'] = $message['order_placed'];
    send($response);
  }
}
function place_order($link)
{
  $cartId = $_SESSION['cart_id'];
  $name = "Harry Potter";
  $creditCard = "1356878909";
  $shippingAddress = "123 Main Street, Denver";
  $sql = "INSERT INTO orders (cartId, name, creditCard, shippingAddress) VALUES (?,?,?,?)";
  $stmt = $link->prepare($sql);
  $stmt->bind_param("sss", $cartId, $name, $creditCard, $shippingAddress);
  $result = $stmt->execute();
  $insert_id = mysqli_stmt_insert_id($stmt);
  $stmt->close();
  unset($_SESSION["cart_id"]);

  return [
    "insert_id "=> $insert_id,
    "order_placed"=>mysqli_fetch_assoc($result)
  ];
}
