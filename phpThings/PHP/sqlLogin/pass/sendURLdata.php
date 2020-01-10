<html>
    <?php
    
    $name = "bob";
    $age = "69";
    $gameName = "yes";
    $price = "420";

?>
<!-- Sends data via query string -->
<!-- <a href="recieveURLdata.php?<?php echo $name.'='.$age; ?>">Send Data</a> -->
<a href="recieveURLdata.php<?php echo "gName=".$gameName."&gPrice=".$price;?>">Query Send</a>

</html>
