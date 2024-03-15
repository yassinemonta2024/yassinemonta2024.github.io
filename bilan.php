<?php

$cnx = mysqli_connect("localhost", "root", "", "bd123456");

if ($cnx == false) {
    die("Erreur de connexion au serveur et à la base<br>");
} else {
    echo "Connexion au serveur et à la base ouverte<br>";
}

$req1 = "SELECT libelle, AVG(securite), AVG(conduite), AVG(confort), COUNT(ev.idmodele)
         FROM modelevoiture mv, evaluation ev
         WHERE mv.idmodele = ev.idmodele
         AND YEAR(dateTest) = YEAR(NOW())
         GROUP BY ev.idmodele;";

$res1 = mysqli_query($cnx, $req1) or die("Erreur requête");

echo "<table border='1'>";
echo "<tr><td>Libellé</td>";
echo "<td>Modèle</td>";
echo "<td>Sécurité</td>";
echo "<td>Confort</td>";
echo "<td>Nbr Tests</td></tr>";

while ($ligne = mysqli_fetch_array($res1)) {
    echo "<tr><td>$ligne[0]</td>";
    echo "<td>$ligne[1]</td>";
    echo "<td>$ligne[2]</td>";
    echo "<td>$ligne[3]</td>";
    echo "<td>$ligne[4]</td></tr>";
}

echo "</table>";

mysqli_close($cnx);
?>
