<h1 style="text-align: center;">Global Variable</h1>

<?php
    $var = "D";
    
    function hello() {
        global $var;
        echo $var;
    };
    hello();
