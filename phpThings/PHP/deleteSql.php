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

$sql = "DELETE FROM students WHERE name='yes'";

if ($conn->query($sql) === TRUE) {
    echo "Record yeeted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>