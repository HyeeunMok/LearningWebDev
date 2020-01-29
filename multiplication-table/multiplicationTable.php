<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
        <link rel="stylesheet" type="text/css" href="vendors/css/grid.css">
        <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400" rel="stylesheet" type="text/css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Multiplication Table</title>
        </head>
        <body>
            <header>
                <nav>
                    <div class="row">
                        <img src="resources/img/logo.png" alt="Fast Sloth logo" class="logo">
                        <ul class="main-nav">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Playground</a></li>
                            <li><a href="#">Lectures</a></li>
                            <li><a href="#">Sign up</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="fastsloth-text-box">
                    <h1>Fast Sloth</h1>
                </div>
            </header>
        <h2 style='color:<?php echo $_GET['titleColor']?>'><?php echo $_GET["title"]; ?></h2>
        
        <section class="table-form" id="tableAlign">
            <div class="row">

            <?php
            // Creating multiplication table based on user's input

            $userCol;
            $userRow; 
            
            if ($_GET["column"] == 0 || empty($_GET["column"])) {
                $userCol = 10;
            } else {
                $userCol = $_GET["column"];
            }
            
            if ($_GET["row"] == 0 || empty($_GET["row"])) {
                $userRow = 10;
                echo "<p id='tableP'> You did not enter the number of row, so a default value of the row is 10.</p>";
                echo "<br>";
            } else {
                $userRow = $_GET["row"];
            }
            
            $style = "background-color:".$_GET["tableColor"].";color:".$_GET["textColor"];
            echo "<table width=300 border='1' style=$style>";
                echo '<tr>';
                echo "<th>&nbsp</th>";
                        echo "<th>".$userCol."</th>";
                echo "</tr>";
                    for ($row = 1; $row <= $userRow; $row++) {
                        echo "<tr><th>" . $row . "</th>";
                            echo "<td style='font-weight:400'>" . $row * $userCol . "</td>";
                        echo "</tr>";
                    }
            echo "</table>";
            ?>
            </div>
        </section>

        <footer>
            <div class="row">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div class="col span-1-of-2">
                    <ul class="social-links">
                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <p>
                    Copyright &copy; 2018 by Fast Sloth (Mok). All rights reserved.
                </p>
            </div>
        </footer>
    </body>
</html>