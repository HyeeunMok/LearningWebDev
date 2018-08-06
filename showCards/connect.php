<?php

try { 
    $dbh = new PDO("mysql:host=localhost;dbname=****_db", "****", "*********");
    echo "Connection success";
}
catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}"); 
}
?>
