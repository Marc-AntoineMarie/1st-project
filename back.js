function isEmpty (value) {
    return value != "";
}

function isGreaterthan (value) {
    return parseFloat(value) >= 10000;
}

function isGreaterthanforlevel (value) {
    return parseFloat(value) >= 0.1;
}

function isGreaterthanfortime(value) {
    return parseFloat(value) >= 5;
}

function isLowerthan (value) {
    return parseFloat(value) < 999999999999;
}

function isLowerthanforlevel (value) {
    return parseFloat(value) < 15;
}

function isLowerthanfortime (value) {
    return parseFloat(value) < 30;
}

function isValidInt(value) {
    return (value % 1 == 0);
}

function isValidFloat(value) {
    return (value % 1 !== 0);
}

function verifamount(value) {

    if (isEmpty(value) && isGreaterthan(value) && isLowerthan(value) && isValidInt(value)) {
        return true
    }
    else {
        return false
    }
}

function veriflevel(value) {

    if (isEmpty(value && isGreaterthanforlevel(value) && isLowerthanforlevel(value) && isValidFloat(value))) {
        return true
    }
    else {
        return false
    }
}

function veriftime(value) {

    if (isEmpty(value) && isLowerthanfortime(value) && isGreaterthanfortime(value) && isValidInt(value)) {
        return true
    }
    else {
        return false
    }
}


const number = document.querySelector("#calculator");
number.addEventListener("click", function (event) {
    event.preventDefault
    
    let errorMessage = "Veuillez remplir les champs :";

    let stchamp =  document.querySelector("#amount").value;
    let ndchamp =  document.querySelector("#level").value;
    let thchamp =  document.querySelector("#time").value;

    verifamount(stchamp).errorMessagess
    veriflevel(ndchamp).errorMessage
    veriftime(thchamp).errorMessage

    let errors = [];

    if (!verifamount(stchamp)) {
        errors.push("amount");
    }
    if (!veriflevel(ndchamp)) {
        errors.push("level");
    }
    if (!veriftime(thchamp)) {
        errors.push("time");
    }

    if (errors.length > 0) {
        errorMessage += " " + errors.join(", ");
        alert(errorMessage);
    } else {
        alert("Tous les champs sont correctement remplis.");
    }
});



