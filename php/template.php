<h1>Template_Syntex</h1>
<?php 
    $hour = date("h");
?>
<p>
    <?php if($hour < 6 || $hour > 18){ ?>
        <b>Night</b>
    <?php } else { ?>
        <i>Days</i>
    <?php } ?>
</p>
