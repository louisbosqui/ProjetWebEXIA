<!DOCTYPE html>
<html>
<head>
	<title>SITE WEB BDE</title>
	<link rel="stylesheet" href="../public/css/style1.css">
</head>
<body>
	<div class = "wrap">
		<h2>Inscris toi</h2>
		<form>
			<input type="text" placeholder="Adresse Email" required>
			<input type="text" placeholder="Confirmation Adresse Email" required>
			<input type="text" placeholder="Pseudonyme" required>
			<input type="password" placeholder="Mot de passe" required>
			<input type="password" placeholder="Confirmation Mot de passe" required>
			<div class="combobox1">
  				<select class="select">
				    <option class="selected" value="1">Etudiant</option>
				    <option class="selected" value="2">Membre BDE</option>
				    <option class="selected" value="3">Salarié EXIA</option>
  				</select>
			</div>
			<input type="password" placeholder="Code Statut" required>
			<input name="btn1" type="submit" value="Inscription">
			<br><br><br>
		</form>
		<p class = "text1">Vous avez déjà un compte?</p>
		<div class = "link">
			<a href="Connexion.html" title="Se connecter au site BDE de l'EXIA CESI Aix">Se connecter</a>
		</div>		
	</div>
</body>
</html>