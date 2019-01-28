<?php 

/**
 * 
 */




class produit
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
<?php include "Header.html";?>


	<div class="main">
		  <h2>Nom du produit</h2>
		    <div class="box">
                <img src="../assets/img/Produit.jpg" alt="Produit">
                <p>Prix : 15 €</p>
                <p>Description : Produit très cool</p>
                <button class="button button1" onclick="location.href='Boutique.php'" type="button">Retour à la boutique </button>
                <button class="button button2" onclick="">Ajouter au panier </button>
            </div>
	</div>

<?php include "footer.html";?>
</body>
</html>