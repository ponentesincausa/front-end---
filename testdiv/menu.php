<?php
$jsonurl = "http://disfuncionarios.org:3000/api/zone";
$json = file_get_contents($jsonurl);
var_dump(json_decode($json));
?>