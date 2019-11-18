<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link);
  $response['body'] = [
    'message' => $message
  ];
  send($response);
}

function check_connection($link) {
  $sql = 'select 1';
  $link->query($sql);
  return 'Successfully connected to MySQL!';
}
