<?php

$repostaReal = "NeymarJunior";

$resposta = $_GET["resposta"];

if($repostaReal == $resposta) {
    header("Location: congratulations.html");
} else {
    header("Location: youwrong.html");
};

?>