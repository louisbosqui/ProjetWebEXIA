<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Test</title>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="code.js"></script>
  <script rel="stylesheet" type="text/css" src="css.css"></script>
  <script src="script.js"></script>
</head>
<body>
  ...
  <!-- Le reste du contenu -->
  ...

 <form name="myForm" action="/action.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form> 

</body>
</html>

<?php 
echo 'test php ' ; 
?>