<?php

if ($request['method'] === 'GET') {
  $sessionId = $_SESSION['cart_id'];

  if (!$sessionId) {
    $response['body'] = [];
    send($response);
  }

  $link = get_db_link();
  // $message = check_connection($link,$sessionId);
  $sql = "SELECT p.productId,
                  p.name,
                  p.image,
                  p.price,
                  p.shortDescription,
                   ci.cartItemId, c.cartId
           FROM products AS p
           JOIN  cartItems AS ci
           ON  p.productId = ci.productId
           JOIN  carts AS c
           ON ci.cartId  = c.cartId
           WHERE c.cartId = $sessionId ";
  $result = mysqli_query($link, $sql);
  $message = mysqli_fetch_all($result, MYSQLI_ASSOC);
  $response['body'] = $message;
  send($response);
}
else if ($request['method'] === 'POST') {
    if (!isset($request['body']['productId']) || !is_numeric($request['body']['productId'])) {
      throw new ApiError("Valid productId is required", 400);
    }
    $link = get_db_link();
    $productId = $request['body']['productId'];
    $message = add_product_toCart($link,$productId);
    $response['body'] = $message ['cart_items'];
    send($response);
}

else if ($request['method'] === "DELETE") {
  if (!isset($request['body']['productId']) || !is_numeric($request['body']['productId'])) {
    throw new ApiError("Valid productId is required", 400);
  }
  $link = get_db_link();
  $productId = $request['body']['productId'];
  $cartItemId = $request['body']['cartItemId'];
  if ($cartItemId) {
    $message = remove_product_fromCart($link, $productId, $cartItemId);
    $response['body'] = $message['cart_items'];
    send($response);
  } else {
    $message = remove_product_completely_fromCart($link, $productId);
    $response['body'] = $message['cart_items'];
    send($response);
  }
}

function remove_product_fromcart($link,$productId,$cartItemId){
  $deleteItemQuery = "DELETE from cartItems WHERE
  productId = $productId
  AND
  cartItemId = $cartItemId ";
  // var_dump($deleteItemQuery);
  $deleteFromCartResult = mysqli_query($link, $deleteItemQuery);
  $delete_id_cartItems = $_SESSION['cart_id'];
  $cart_items_query = "SELECT ci.cartItemId, p.productId, p.name, p.price, p.image, p.shortDescription
                        FROM products AS p
                        JOIN cartItems AS ci
                         ON p.productId = ci.productId
                        WHERE ci.cartItemId = $delete_id_cartItems";

  $cart_items_result = mysqli_query($link, $cart_items_query);
  // return  mysqli_fetch_assoc($cart_items_result);
  return [
    "cart_items" => mysqli_fetch_assoc($cart_items_result)
  ];
}

function remove_product_completely_fromCart($link, $productId){
$deleteItemQuery = "DELETE from cartItems WHERE
  productId = $productId ";
  // var_dump($deleteItemQuery);
  $deleteFromCartResult = mysqli_query($link, $deleteItemQuery);
  $delete_id_cartItems = $_SESSION['cart_id'];
  $cart_items_query = "SELECT ci.cartItemId, p.productId, p.name, p.price, p.image, p.shortDescription
                        FROM products AS p
                        JOIN cartItems AS ci
                         ON p.productId = ci.productId
                        WHERE ci.cartItemId = $delete_id_cartItems";

  $cart_items_result = mysqli_query($link, $cart_items_query);
  // return  mysqli_fetch_assoc($cart_items_result);
  var_dump($cart_items_result);
  return [
    "cart_items" => mysqli_fetch_assoc($cart_items_result)
  ];
}

function add_product_toCart($link,$productId)
{
  $query = "SELECT price FROM products WHERE productId=$productId";

  $result = mysqli_query($link, $query);
  $prod_price =  mysqli_fetch_assoc($result);
  $price = $prod_price['price'];
  // return $price;

  if (!$_SESSION['cart_id']) {
    $insertIntoCartQuery = "INSERT INTO carts (createdAt) VALUES (CURRENT_TIMESTAMP)";
    $insertIntoCartResult = mysqli_query($link, $insertIntoCartQuery);
    $insert_id_cart = $link->insert_id;
    $_SESSION['cart_id'] = $insert_id_cart;
  // return $insert_id_cart;
  } else {
    $insert_id_cart = $_SESSION['cart_id'];
  }

    $insertIntoCartItemsQuery = "INSERT INTO cartItems(cartId, productId, price) VALUES
  ($insert_id_cart,$productId,$price)";
    $insertIntoCartItemsResult = mysqli_query($link, $insertIntoCartItemsQuery);
    $insert_id_cartItems = $link->insert_id;
  // return $insert_id_cartItems;


  $cart_items_query = "SELECT ci.cartItemId, p.productId, p.name, p.price, p.image, p.shortDescription
                        FROM products AS p
                        JOIN cartItems AS ci
                         ON p.productId = ci.productId
                        WHERE ci.cartItemId = $insert_id_cartItems";

   $cart_items_result = mysqli_query($link, $cart_items_query);
    // return  mysqli_fetch_assoc($cart_items_result);
    return [
      "cart_id" => $insert_id_cart,
      "cart_items" => mysqli_fetch_assoc($cart_items_result)
    ];
}
