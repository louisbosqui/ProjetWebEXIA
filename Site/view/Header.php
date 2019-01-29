
<?php 
/*$client = new GuzzleHttp\Client();
$res = $client->request('GET', 'https://api.github.com/user', [
    'auth' => ['user', 'pass']
]);
echo $res->getStatusCode();
// "200"
echo $res->getHeader('content-type');
// 'application/json; charset=utf8'
echo $res->getBody();
// {"type":"User"...'*/

?>




        <!--header-->
        <div class="header">
            <meta charset="UTF-8">
            <meta name="viewport"  content="width=device-width, initial-scale=1">
            <title>Header</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="../public/css/header.css" />
            <div class="Localisation">
                <p>
                    Aix en Provence<br/>
                    Domaine de l'arbois
                </p>
            </div>
            <div class="title">
                <h1>CESI EXIA BDE</h1>
                <p>École d'ingénieur informatique</p>
            </div>
        </div>
        <!--Menu naviqation-->

        <header2>
            <div class="container">

                <nav>
                    <ul>
                        <li><a href="Acceuil.php">Acceuil</a></li>
                        <li><a href="Activites.php">Activités</a></li>
                        <li><a href="Contact.php">Contact</a></li>
                        <li><a href="Boutique.php">Boutique</a></li>
                        <li><a href="BAI.php">Boîte à idée</a></li>
                        <li><a href="Connexion.php">Authentification</a></li>
                        <?php if($_SESSION['statut']=2): ?>
                        <li><a href="Gestion.php">Gestion</a></li>
                        <?php endif ?>

                    </ul>
                </nav>
            </div>
        </header2>

