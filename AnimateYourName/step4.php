<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script type="text/javascript" src="http://s3.amazonaws.com/codecademy-content/courses/hour-of-code/js/alphabet.js"></script>
        <title>Animate Your Name</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
        <?php
        $_SESSION["shape"] = $_GET["shape"];
        ?>

        <canvas id="myCanvas"></canvas>
        <script type="text/javascript" src="http://s3.amazonaws.com/codecademy-content/courses/hour-of-code/js/bubbles.js"></script>
        <script type="text/javascript">
        var H = "<?= $_SESSION["hue"] ?>";
        var S = "<?= $_SESSION["saturation"] ?>";
        var L = "<?= $_SESSION["lightness"] ?>";

        var myName = "<?= $_SESSION["name"] ?>";
        var first = [H, S, L];
        var second = orange;
        var third = blue;
        var fourth = green;
        var fifth = red;
        var letterColors = [first,second,third,fourth,fifth];
        bubbleShape = "<?= strtolower($_SESSION["shape"]) ?>";
        drawName(myName, letterColors);
        bounceBubbles();
        </script>

        <?php
        session_destroy();
        ?>
    </body>
</html>