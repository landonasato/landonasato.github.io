<html>
<head>
</head>
<body>
</body>
<?php
$servername = "localhost";
$username = "lanasa21";
$password = "asato";

// Create connection
$conn = new mysqli($servername, $username, $password);
$sql = 

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>
</html>