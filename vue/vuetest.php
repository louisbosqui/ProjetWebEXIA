<?php
include __DIR__ . '/../controlleur/controlleur.php';
class View
{
    private $controller;

    public function __construct($controller) {
        $this->controller = $controller;
    }
	
    public function output(){
        return "<p>" . $this->controller->model->string . "</p>";
    }
}


$controller = new Controller($model);
$view = new View($controller);
echo $view->output();