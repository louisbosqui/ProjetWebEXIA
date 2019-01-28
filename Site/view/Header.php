
<?php 
require ('./vendor/autoload.php');
 $client = new GuzzleHttp\Client();
  $res = $client->get('http://127.0.0.1:8080/api/users/', [
     
  ]);
  echo $res->getStatusCode();           // 200
echo $res->getHeader('content-type'); // 'application/json; charset=utf8'
echo $res->getBody();    

/*$res = $client->post('http://127.0.0.1:8080/api/users/', [
    'auth' =>  ['user', 'pass']
]);
 $res = $client->put('http://127.0.0.1:8081/api/users/',- [
     'ID' => 1 ,
     'Mdp'=> 'ok'
 ]);*/
             // {"type":"User"...'
//var_export($res->json()); 
//exit();
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
                        <li><a href="#">Acceuil</a></li>
                        <li><a href="#">Activités</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="Contact.html">Contact</a></li>
                        <li><a href="#">Boutique</a></li>
                        <li><a href="Connexion.html">Authentification</a></li>
                    </ul>
                </nav>
            </div>
        </header2>

