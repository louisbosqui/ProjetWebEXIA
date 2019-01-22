<?php
include __DIR__ . '/../model/model.php';

class Controller
{
    private $model;

    public function __construct($model) {
        $this->model = new Model();
    }
}