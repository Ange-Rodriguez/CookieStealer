<?php
header("Access-Control-Allow-Origin: http://localhost:8000");

if (!empty($_POST)) {
    file_put_contents("php://stdout", "Request data:\n");
    if (!is_dir('./outputs')) {
        mkdir('./outputs');
    }
    file_put_contents(
        "./outputs/"
            . date('Y-m-d-His#')
            . str_replace(':', '', $_SERVER['REMOTE_ADDR'])
            . ".json",
        json_encode($_POST, JSON_PRETTY_PRINT)
    );
}