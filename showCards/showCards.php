<!DOCTYPE html>
<html>
    <head>
        <title>Greeting Cards</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
        <div id="container">
            <h1 style="color: green">Here are available cards</h1>
            <?php
                include "connect.php";
                $command = "SELECT A.fileName, B.name FROM image A, holiday B where A.holidayId = B.id";
                $stmt = $dbh->prepare($command);

                $stmt->execute();

            while($row = $stmt->fetch())
            {
                echo "<table style='width:30%' border=1px>";
                        echo "<td style='width:60%'><a href='#'>" . $row["name"] ."</a></td>";
                        echo "<td style='text-align: center;'><img src='img/". $row["fileName"]."'/". "width='90' height='90'></td>";
                    echo "</tr>";
                echo "</table>";
            }
            ?>
            <p><a href="index.html">back</a></p>
        </div>
         <footer>
            <div>
                <p>
                    Copyright &copy; 2018 by Fast Sloth (Mok). All rights reserved.
                </p>
            </div>
        </footer>
    </body>
</html>
