<?php

// $response['body'] = [
//   "message" => "You are cool"
// ];

// $response['status'] = 202;
if(empty($request['body'])){
  throw new ApiError("You are not allowed",403);
}

send($response);
