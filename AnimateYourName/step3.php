<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php

        $_SESSION["hue"] = $_GET["hue"];
        $_SESSION["saturation"] = $_GET["saturation"];
        $_SESSION["lightness"] = $_GET["lightness"];

        ?>
        <h1>Hello, <?= $_SESSION["name"] ?>!</h1>
        <h3>You have chosen this color. Hue: (<?= $_SESSION["hue"] ?>), Saturation: (<?= $_SESSION["saturation"] ?>), Lightness: (<?= $_SESSION["lightness"] ?>)</h3>
        <p>Which shape do you prefer?</p>
        <form action="step4.php" method="GET">
        <select name="shape">
            <option value="circle" selected>Circle</option>
            <option value="square">Square</option>
        </select>
        <input type="submit" value="Submit"><br><br>
        </form  >
    </body>
</html>
