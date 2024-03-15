function uniquementLettres(x) {
    x = x.toUpperCase();
    var i = 0;
    while (x.charAt(i) >= "A" && x.charAt(i) <= "Z" && i < x.length) {
        i++;
    }
    return i === x.length;
}

function verif1() {
    var resultat = true;
    var numPermis = document.getElementById("numPermis").value;
    var nom = document.getElementById("nomPilote").value;
    var prenom = document.getElementById("prenomPilote").value;

    var s = document.getElementById('ville').selectedIndex;
    var nb1 = numPermis.substr(0, 2);
    var nb2 = numPermis.substr(3);

    if (numPermis.indexOf('/') !== 2 || isNaN(nb1) || isNaN(nb2) || nb1.length !== 2 || nb2.length !== 5) {
        resultat = false;
        alert("Le numéro du permis n'est pas conforme");
    } else if (nom.length < 3 || nom.length > 20 || !uniquementLettres(nom)) {
        resultat = false;
        alert("Le nom doit avoir de 3 à 20 lettres");
    } else if (prenom.length < 3 || prenom.length > 20 || !uniquementLettres(prenom)) {
        resultat = false;
        alert("Le prénom doit avoir de 3 à 20 lettres");
    } else if (!(document.getElementById("radF").checked || document.getElementById("radM").checked)) {
        resultat = false;
        alert("Spécifier le genre du pilote!");
    } else if (s <= 0) {
        resultat = false;
        alert("La sélection d'une ville est obligatoire");
    }

    return resultat;
}



function verif2() {
    var resultat = true;
    var permis = document.getElementById("permis").value; 
    var cond = document.getElementById("cond").value; 
    var sec = document.getElementById("sec").value; 
    var conf = document.getElementById("conf").value; 

    var nb3 = permis.substr(0, 2);
    var nb4 = permis.substr(3);

    if (permis.indexOf('/') !== 2 || isNaN(nb3) || isNaN(nb4) || nb3.length !== 2 || nb4.length !== 5) {
        resultat = false;
        alert("Le numéro du permis n'est pas conforme");
    } else if (document.getElementById('modele').selectedIndex <= 0) {
        resultat = false;
        alert("Sélection du modèle est obligatoire");
    } else if (sec.length !== 1 || isNaN(sec) || Number(sec) < 1 || Number(sec) > 5) {
        resultat = false;
        alert("La note de la sécurité doit être entre 1 et 5");
    } else if (cond.length !== 1 || isNaN(cond) || Number(cond) < 1 || Number(cond) > 5) {
        resultat = false;
        alert("La note de conduite doit être entre 1 et 5");
    } else if (conf.length !== 1 || isNaN(conf) || Number(conf) < 1 || Number(conf) > 5) {
        resultat = false;
        alert("La note du confort doit être entre 1 et 5");
    } else if (!document.getElementById('robot').checked) {
        resultat = false;
        alert("La case 'Je ne suis pas un robot' doit être cochée");
    }

    return resultat;
}
