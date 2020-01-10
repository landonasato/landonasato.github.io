<?php
session_start();
?>
<html>
    <body>

    <form action="phpRecieve.php" method="post">
    <select name="shirt_color">
        <option>White</option>
        <option>Black</option>
</select>
    <select name="shirt_size">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
</select>
    Name: <input type="text" name="nameInput"><br>
    Address: <input type="text" name="AddInput"><br>
    <input type="submit">
    </form>

        </body>
        </html>

        