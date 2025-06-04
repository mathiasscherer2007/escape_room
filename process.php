<?php

$realAnswer = "Neymar Junior";

$answer = $_GET["answer"];

if($realAnswer == $answer) {
    header("Location: congratulations.html");
} else {
    header("Location: youwrong.html");
};

?>