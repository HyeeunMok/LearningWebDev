<!DOCTYPE html>
<html>
    <head>
        <title>Greeting Cards</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <style>
            section {
                padding: 5px 0;
                margin-left: 50px;
            }
            h1 {
                color: white;
                background-color: tomato;
                margin-right: 800px;
                text-align: center;
                padding: 10px;
            }
            table, td {
                text-align: center;
                width: 33%;
                border: 1px solid tomato;
                border-spacing: 0;
                border-collapse: collapse;
            }
        </style>
    </head>
    <body>
        <section>
        <div>
            <h1>Here are available cards</h1>
            <?php
                include "connect.php";
                $command = "SELECT A.fileName, B.name FROM image A, holiday B where A.holidayId = B.id";
                $stmt = $dbh->prepare($command);

                $stmt->execute();

            while($row = $stmt->fetch())
            {
                echo "<table>";
                        echo "<td style='width:60%'><a href='#'>" . $row["name"] ."</a></td>";
                        echo "<td><img src='img/". $row["fileName"]."'/". "width='90' height='90'></td>";
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
            
        </section>
    </body>
</html>
