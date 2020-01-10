<?php

require 'errorHandler.php';

$store = "0'reilys";
$num = 6;

$newError = $store+$num;
//php can run var in string w/ double quotes, not with single quotes.
echo "bob likes to buy car parts at $store  "
echo 'bob likes to buy car parts at $store'
?> 