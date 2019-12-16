<?php
// session_start();
if ($request['method'] === 'POST') {
  if (!$_SESSION['cart_id']) {
    throw new ApiError('Active Shopping Cart is Required', 400);
  } else{
    if (!$request['body']['name'] || !$request['body']['creditCard'] || !$request['body']['shippingAddress']) {
      throw new ApiError('Customer name /creditCard /shippingAddress might be missing', 400);
    }
    $link = get_db_link();
    $cartId = $_SESSION['cart_id'];
    $name = $request['body']['name'];
    $creditCard = $request['body']['creditCard'];
    $shippingAddress = $request['body']['shippingAddress'];
    $message = place_order($link, $cartId, $name, $creditCard, $shippingAddress);
    $response['body'] = $message;
    send($response);
  }
}
function place_order($link,$cartId,$name,$creditCard,$shippingAddress)
{

  $sql = "INSERT INTO orders (cartId, name, creditCard, shippingAddress) VALUES (?,?,?,?)";
  $stmt = $link->prepare($sql);
  $stmt->bind_param("isss", $cartId, $name, $creditCard, $shippingAddress);

  $stmt->execute();
  $insert_id = mysqli_stmt_insert_id($stmt);
  $result = $stmt->get_result();
  // $row = $result->fetch_assoc();
  $stmt->close();
  unset($_SESSION["cart_id"]);

  return [
    "insert_id" => $insert_id,
    "name" => $name,
    "creditCard" => $creditCard,
    "shippingAddress" => $shippingAddress
    // "order_placed" => mysqli_fetch_all($result, MYSQLI_ASSOC)
  ];
}
