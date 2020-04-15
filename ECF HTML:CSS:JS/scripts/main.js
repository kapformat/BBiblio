

/*-------------------------------------connexion--------------------------------------------------------------------- */

document.forms["connexionIndex"].addEventListener("submit", function (e) 
{
    var errorCo;

    var inputs = this;

    if (inputs["mdp"].value != "abcde") 
    {
        errorCo = "Mot de passe incorrect";
    }
    if (inputs["id"].value != "afpacojury" && inputs["id"].value != "afpacoauteur") 
    {
        errorCo = "Identifiant inconnu";
    }
    else {
        if (inputs["id"].value == "afpacojury") 
        {
            alert("welcome jury!");
            window.open("html_jury_auteur/juryRemplirProfil.html");
        }
        else {
            if (inputs["id"].value == "afpacoauteur") 
            {
                alert("welcome auteur!");
                window.open("html_jury_auteur/auteurRemplirProfil.html");
            }
        }


        //allez vers page jury ou auteur selon id
    }

    if (errorCo) 
    {
        e.preventDefault();
        document.getElementById("paraErrorCo").innerHTML = errorCo;
        return false;
    }

})
