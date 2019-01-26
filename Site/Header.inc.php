
<!--header-->
<head>
    <br>
    <link rel="stylesheet" type="text/css" href="header.css" />
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
</head>
<div class="header">
    <img src="Logo.jpg" alt="Logo" class="logoHeader"/>
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

<div class="listMenu">
    <a class="menu" href="#">Acceuil</a>
    <a class="menu" href="#">Boutique</a>
    <a class="menu" href="#">Information</a>
    <a class="menu" href="#">Boite à idées</a>
    <a class="menu" href="#">Evènements</a>
    <a class="menu" href="#">Contact</a>
    <a class="menu" href="#">Deconnexion</a>
</div>

       <?php 
require ('./vendor/autoload.php');
 $client = new GuzzleHttp\Client();
  $res = $client->get('http://127.0.0.1:8080/api/users/', [
     
  ]);
/*$res = $client->post('http://127.0.0.1:8080/api/users/', [
    'auth' =>  ['user', 'pass']
]);
 $res = $client->put('http://127.0.0.1:8081/api/users/', [
     'ID' => 1 ,
     'Mdp'=> 'ok'

 ]);*/
echo $res->getStatusCode();           // 200
echo $res->getHeader('content-type'); // 'application/json; charset=utf8'
echo $res->getBody();                 // {"type":"User"...'
//var_export($res->json()); 
//exit();
?> 