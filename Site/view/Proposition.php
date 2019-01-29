<?php

/**
 *
 */



class BAI
{

}

?>
<!DOCTYPE html>
<html>
<head>
    <title>SITE WEB BDE</title>
    <link rel="stylesheet" href="../public/css/BAI.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou" rel="stylesheet">
</head>
<body>
<?php include "Header.php";?>

<div class="container-slide">
    <form>
        <input class="nom" type="text" placeholder="Nom de l'activité" required>
        <input class="description" type="text" placeholder="Description de l'activité" required>
        <input class="date" type="date" id="start" name="act-start" value="2019-01-30" min="2019-01-01" max="2025-12-31">
        <input class="submit" type="submit" value="Proposer">
    </form>
</div>




<?php include "footer.php";?>
</body>
</html>