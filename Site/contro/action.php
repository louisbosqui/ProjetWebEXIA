Hi <?php echo htmlspecialchars($_POST['mail']); ?>.
You are <?php echo htmlspecialchars($_POST['nom']); ?> years old.
Hi <?php echo htmlspecialchars($_POST['mdp']); ?>.



<?php 
 require ('../vendor/autoload.php');
  $client = new GuzzleHttp\Client();
//   $res = $client->get('http://127.0.0.1:8080/api/users/', [
     
//   ]);
//   echo $res->getStatusCode();           // 200
// echo $res->getHeader('content-type'); // 'application/json; charset=utf8'
// echo $res->getBody();    

$response = $client->request('POST', 'http://127.0.0.1:8080/api/signin/', [
    'form_params' => [
        'Mail' => $_POST['mail'],
        'Nom' => $_POST['nom'],
        'mdp' => $_POST['mdp']
    ]
]);

echo $response->getStatusCode();           // 200
echo $response->getHeader('content-type'); // 'application/json; charset=utf8'
echo $response->getBody();
//$rep =$response->getBody()->getContents();   
$rep = (string) $response->getBody();

echo '<br>';
//echo $rep;
echo '<br>';

 if ($rep == "Mauvais mot de passe" || $rep =="Mauvais mail") {
 			echo "on a catch les erreurs";    // faire une redirection 
	}else{
			$response = (string) $response->getBody();
			$json = json_decode($response); 
			$token = $json->token;
			//echo $token;
			//echo 'ON TEST LES TOKENS MNT ' ; 
			
			$headers = [
			    'Authorization' => 'Bearer ' . $token,        
			    'Accept'        => 'application/json',
			];
			$response = $client->request('POST', 'http://127.0.0.1:8080/api/products', [
			        'headers' => $headers
			    ]);
			echo $response->getStatusCode();           // 200
			echo $response->getHeader('content-type'); // 'application/json; charset=utf8'
			echo $response->getBody();
	}





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