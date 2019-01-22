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

<h2>JavaScript Can Validate Input</h2>

<p>Please input a number between 1 and 10:</p>

<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

</body>
</html>

<?php 
echo 'test php ' ; 
?>