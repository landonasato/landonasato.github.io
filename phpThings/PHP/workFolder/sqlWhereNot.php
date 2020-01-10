<?php
$servername = "localhost";
$username = "lanasa21";
$password = "asato";
$dbname = "lanasa21";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//$sql = "SELECT * FROM students WHERE NOT gradelvl=3";
$sql = "UPDATE students SET= "
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "name: " . $row["name"]. " - age: " . $row["age"]. " - gradelvl: " . $row["gradeLevel"]. "<br><br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>