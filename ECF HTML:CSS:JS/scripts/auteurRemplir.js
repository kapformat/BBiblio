document.getElementById("pwd2").addEventListener("input", function (e) 
{
    if (this.value != document.getElementById("pwd").value) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = "Vos mots de passe sont differents";
    }
    else 
    {
        document.getElementById("paraError").innerHTML = "";
    }
})

document.forms["auteurRemplir"].addEventListener("submit", function (e) 
{
    var error;

    var inputs = this;
    // ici la comparaison de mail
    for (var i = 0; i < inputs.length; i++) 
    {
        if (!inputs[i].value) 
        {
            error = "Veuillez renseigner tout les champs !"
        }
    }
    if (pwd2.value != pwd.value) 
    {
        error = "Entrez des mots de passe identiques!";
    }

    if (error) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = error;
        return false;
    }
    else 
    {
        alert("Formulaire envoyé ! ");
        window.open("auteurPagePerso.html");
    }

})