<?php

$realAnswer = "Neymar Junior";

$answer = $_GET["answer"];

if($realAnswer == $answer) {
    header("Location: pages/congratulations.html");
} else {
    header("Location: pages/youwrong.html");
};

?>