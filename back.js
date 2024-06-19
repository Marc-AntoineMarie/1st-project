function isEmpty (value) {
    return value != "";
}

function isGreaterthan (value) {
    return parseFloat(value) >= 10000;
}

function isLowerthan (value) {
    return parseFloat(value) < 999999999999;
}

function nombre (value) {
    return Number.isInteger(value)
}

function isValidFloat(value) {
    return (value % 1 !== 0);
}

function verifamount(value) {


    // if (isEmpty(value)) {
    //     document.getElementById("error_txt").textContent = "";
    // }
    // else{
    //     document.getElementById("error_txt").textContent = "Montant emprunté";
    // }

    // if (isGreaterthan(value)) {
    //     document.getElementById("error_txt").textContent = "";
    // }
    // else{
    //     document.getElementById("error_txt").textContent = "Montant emprunté";
    // }

    // if (isLowerthan(value)) {
    //     document.getElementById("error_txt").textContent = "";
    // }
    // else{
    //     document.getElementById("error_txt").textContent = "Montant emprunté";
    // }

    // if (nombre (value)) {
    //     document.getElementById("error_txt").textContent = "";
    // }
    // else{
    //     document.getElementById("error_txt").textContent = "Montant emprunté";
    // }

    if (isValidFloat(value)) {
        document.getElementById("error_txt").textContent = "Montant emprunté";
    }
    else{
        document.getElementById("error_txt").textContent = "";
    }
}



const number = document.querySelector("#calculator");
number.addEventListener("click", function (event) {
    event.preventDefault
    
    let errorMessage = "Veuillez remplir les champs :";

    let stchamp =  document.querySelector("#amount").value;
    let ndchamp =  document.querySelector("#level").value;
    let thchamp =  document.querySelector("#time").value;


    let parsechampst = parseInt(stchamp);
    let parsechampnd = parseInt(ndchamp);
    let parsechampth = parseInt(thchamp);

    console.log(verifamount(stchamp));
  

});










// const number = document.querySelector("#calculator");

// number.addEventListener("click", function (event) {

//     event.preventDefault();

//     let stchamp =  document.querySelector("#amount").value;
//     let ndchamp =  document.querySelector("#level").value;
//     let thchamp =  document.querySelector("#time").value;


//     // Initialise le message d'erreur
//     let errorMessage = "Veuillez remplir les champs :";
//     let isError = false;

//     // Vérifie chaque champ
//     if (!stchamp < 10000 || stchamp > 999999999999) {
//         errorMessage += " Montant emprunté";
//         isError = true;
//     }
//     if (!ndchamp < 0.2 || ndchamp > 15) {
//         errorMessage += " Taux nominal";
//         isError = true;
//     }
//     if (!thchamp) {
//         errorMessage += " Durée de rembourseme";
//         isError = true;
//     }
//     if (!thchamp || thchamp == "" || ndchamp == "" || stchamp == "") {  
//         errorMessage
//         isError = true;
//     }


//     // Affiche le message d'erreur s'il y a des champs non remplis
//     if (isError) {
//         document.getElementById('errorMessage').innerText = errorMessage;
//     } else {
//         document.getElementById('errorMessage').innerText = "";
//     }




//     // if (stchamp.trim() == "") {
//     //     document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
//     // }
//     // else if (ndchamp.trim() == ""){
//     //     document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
//     // }   
//     // else if (thchamp.trim() == ""){
//     //     document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
//     // }   
//     // else {
//     //     document.getElementById("error_txt").textContent = "";
//     //}
// });

