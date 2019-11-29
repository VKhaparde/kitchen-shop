<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;

  case '/api/health-check':
  case '/api/test':
  case '/api/products':
  case '/api/cart':
  case '/api/orders':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
