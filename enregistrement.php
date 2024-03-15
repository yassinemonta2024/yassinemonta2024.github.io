<?php

$cnx = mysqli_connect("localhost", "root", "", "bd123456");

if ($cnx == false) {
    die("Erreur de connexion au serveur et à la base<br>");
} else {
    echo "Connexion au serveur et à la base ouverte<br>";
}


$numpermis = $_POST['numPermis'];
$nompilote = $_POST['nomPilote'];
$prenompilote = $_POST['prenomPilote'];
$genre = $_POST['rad'];
$ville = $_POST['ville'];


$req1 = "SELECT * FROM testeur WHERE numPermis='$numpermis';";
$res1 = mysqli_query($cnx, $req1) or die("Erreur requête 1");
$n = mysqli_num_rows($res1);

if ($n > 0) {
    echo "Numéro de permis déjà existant";
} else {

    $req2 = "INSERT INTO testeur VALUES('$numpermis','$nompilote','$prenompilote','$genre','$ville');";
    $res2 = mysqli_query($cnx, $req2) or die("Erreur requête 2");
    $na = mysqli_affected_rows($cnx);

    if ($na > 0) {
        echo "Enregistrement fait avec succès<br>";
    } else {
        echo "Enregistrement échoué";
    }
}

mysqli_close($cnx);
?>
