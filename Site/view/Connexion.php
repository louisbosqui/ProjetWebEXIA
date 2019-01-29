<!DOCTYPE html>
<html>
<head>
	<title>SITE WEB BDE</title>
	<link rel="stylesheet" href="../public/css/style1.css">
</head>
<body>
	<div class = "wrap">
		<h2>Connectes toi</h2>
		<form action = "../contro/action.php" method="post">
			<input type="text" placeholder="Adresse Email" name="mail" required>
			<input type="text" placeholder="Nom" name="nom" required>
			<input type="password" placeholder="Mot De passe" name="mdp"required>
			<input name="btn1" type="submit" value="Connexion">
			<br><br><br>
		</form>
		<p class = "text1">Vous n'avez pas de compte?</p>
		<div class = "link">
			<a href="Inscription.php" title="S'incrire au site BDE de l'EXIA CESI Aix">S'incrire</a>
		</div>		
	</div>
</body>
</html>