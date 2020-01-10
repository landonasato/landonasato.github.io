<?php 

$user = "team1"; 
$password = "team1"; 
$host = "localhost"; 

$connection= mysql_connect ($host, $user, $password);
if (!$connection)
{
die ('Could not connect:' . mysql_error());
}



$showtables= mysql_query("SHOW TABLES FROM enemyBase");

while($table = mysql_fetch_array($showtables)) { // go through each row that was returned in $result
    echo($table[0] . "<br>");    // print the table that was returned on that row.
}
?>