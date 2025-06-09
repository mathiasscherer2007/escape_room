<?php

$realAnswer = "neymar";

$answer = strtolower($_POST["answer"]);

if(str_contains($answer, $realAnswer)) {
    header("Location: pages/congratulations.html");
} else {
    header("Location: pages/youwrong.html");
};

?>