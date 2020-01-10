<?php
$servername = "localhost";
$username = "lanasa21";
$password = "asato";
$dbname = "lanasa21";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection, if connection failed output message.
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Variables
$name = "yes";
$age = 12;
$gradeLevel = 5;
//Select table
$sql = "SELECT `name`, `age`, `gradeLevel` FROM `students` WHERE name='Akiara'";
//$sql = "SELECT `name`, `age`, `gradeLevel` FROM `students` ORDER BY name";
$result = $conn->query($sql);
//Add Variables to Tables
//$sql = "INSERT INTO students (name, age, gradeLevel) VALUES ('$name', '$age', '$gradeLevel')";

//Check connection and report.
$sql = "SELECT 'name', 'age', 'gradeLevel' FROM 'students' WHERE name = 'Akiara'";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row['name']." is ". $row['age']." years old and in grade ".$row['gradeLevel'];
        echo "<br><br>";
    }
}else {
    echo "0 results";
}
8
$conn->close();
?>