<?php
$servername = "localhost";
$username = "team1";
$password = "team1";
$dbname = "enemyBase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, age, gradeLevel FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "name: " . $row["name"]. " - rank: " . $row["rank"]. " - access: " . $row["accessLevel"]. "<br><br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>