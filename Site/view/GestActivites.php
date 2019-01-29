<?php

/**
 *
 */



class GestActivites
{

}

?>
<!DOCTYPE html>
<html>
<head>
    <title>SITE WEB BDE</title>
    <link rel="stylesheet" href="../public/css/Gestion.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou" rel="stylesheet">
</head>
<body>
<?php include "Header.php";?>

<div class="box">
    <a class="button" href="#popup1">Supprimer une activité</a>
    <a class="button" href="#popup2">Ajouter une activité</a>
</div>

<div id="popup1" class="overlay">
    <div class="popup">
        <h2>Suppression d'une activité</h2>
        <a class="close" href="#">&times;</a>
        <form action="">
            ID de l'activité : <input class="produit" type="number" required>
            <input class="submit" type="submit" value="Supprimer">
        </form>
    </div>
</div>

<div id="popup2" class="overlay">
    <div class="popup">
        <h2>Ajout d'une activité</h2>
        <a class="close" href="#">&times;</a>
        <form action="">
            Nom de l'activité:<br><input class="nom" type="text" required>
            Description de l'activité:<input class="description" type="text" required><br>
            Date de l'activité:<input class="date" type="date" id="start" name="act-start" value="2019-01-30" min="2019-01-01" max="2025-12-31"><br>
            Lieu de l'activité:<input class="lieu" type="text" required><br>
            <input class="submit" type="submit" value="Ajouter">
        </form>
    </div>
</div>




<?php include "footer.php";?>
</body>
</html>