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
    <a class="button" href="#popup1">Supprimer un produit</a>
    <a class="button" href="#popup2">Ajouter un produit</a>
</div>

<div id="popup1" class="overlay">
    <div class="popup">
        <h2>Suppression d'un produit</h2>
        <a class="close" href="#">&times;</a>
        <form action="">
            ID du produit : <input class="produit" type="number" required>
            <input class="submit" type="submit" value="Supprimer">
        </form>
    </div>
</div>

<div id="popup2" class="overlay">
    <div class="popup">
        <h2>Ajout d'un produit</h2>
        <a class="close" href="#">&times;</a>
        <form action="">
            Nom du produit:<br><input class="nom" type="text" required>
            Description du produit:<input class="description" type="text" required><br>
            Prix du produit:<input class="prix" type="number" required><br>
            Image du produit: <input class="image" type="text"><br>
            <input class="submit" type="submit" value="Ajouter">
        </form>
    </div>
</div>




<?php include "footer.php";?>
</body>
</html>