const number = document.querySelector("#calculator");

number.addEventListener("click", function() {

    let stchamp =  document.querySelector("#amount").value;
    let ndchamp =  document.querySelector("#level").value;
    let thchamp =  document.querySelector("#time").value;

    if (stchamp.trim() == "") {
        document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
    }
    else if (ndchamp.trim() == ""){
        document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
    }   
    else if (thchamp.trim() == ""){
        document.getElementById("error_txt").textContent = "Veuillez remplir tous les champs !";
    }   
    else {
        document.getElementById("error_txt").textContent = "";
    }
});


