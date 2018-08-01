<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Getting a color</title>
    </head>
    <body>
        <?php
        // 2. Store data in the $_SESSION superglobal
        $_SESSION["name"] = $_GET["name"];
        ?>
        <h1>Hello <?= $_SESSION["name"] ?></h1>
        <p>Please enter number to choose a color of the first letter for your name!</p><br>

        <form action="step3.php" method="GET">
            Hue: <input type="number" name="hue" min="0" max="360" placeholder="0-360" required><br><br>
            Saturation: <input type="number" name="saturation" min="0" max="100" placeholder="0-100" required><br><br>
            Lightness: <input type="number" name="lightness" min="0" max="100" placeholder="0-100" required><span style="color:red"> Caution: If you set lightness to 100, you will not be able to see your first letter!</span> <br><br>
            <input type="submit" value="Submit"><br><br>
        </form>
    </body> 
</html>
