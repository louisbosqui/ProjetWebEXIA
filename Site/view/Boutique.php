<?php 

/**
 * 
 */




class boutique  
{
	
}

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>SITE WEB BDE</title>
	<link rel="stylesheet" href="../public/css/style2.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou" rel="stylesheet">
</head>
<body>
<?php include "Header.php";?>

	<div class="sidenav">
		<br>
        <p class="sidenav-text-1">Rechercher</p><br>
			<input type="text" placeholder=""><br><br><br>
			<div>
                <p class="sidenav-text-1">Trier par</p><br>

                <label class="radioContainer">
                    <input type="radio" name="Tri">Prix Croissant
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Tri">Prix Décroissant
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Tri">Date
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Tri">Popularité
                    <span class="circle"></span>
                </label>
                <br><br>
			</div>
			<div>
                <p class="sidenav-text-1">Catégorie</p><br>
                <label class="radioContainer">
                    <input type="radio" name="Categorie">Vêtements
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Categorie">Accesoires
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Categorie">Autres
                    <span class="circle"></span>
                </label>
                <br>

                <label class="radioContainer">
                    <input type="radio" name="Categorie">Toutes Catégories
                    <span class="circle"></span>
                </label>
                <br>
			</div>
			<button class="recherche"><span>Recherche </span></button>
	</div>
	<div class="main">
		  <h2>Boutique Officielle</h2>
		    <div class="box">
                
                <ul>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                    <li><a href="Produit.php"> <div class="title"> Produit </div> <img src="../assets/img/Produit.jpg" alt="Produit"> </a></li>
                </ul>
            </div>
	</div>


</body>
<?php include "footer.php";?>
</html>