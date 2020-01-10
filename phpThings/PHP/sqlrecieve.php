 <?php
$servername = "localhost";
$username = "team3";
$password = "team3";
$dbname = "enemyBase";
//require 'errorHandler.php';
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SHOW tables"; 
$result = mysqli_query($conn, $sql);
echo $sql;
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<table>";
        echo "<tr>";
            echo "<th>id</th>";
            echo "<th>table_name</th>";
            echo "</tr>";
            while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['table_name'] . "</td>";
                    echo "</tr>";
                    echo "</table>"
            }
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?> 