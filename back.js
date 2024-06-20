function isEmpty (value) {
    return value != "";
}

function isGreaterthan (value) {
    return parseFloat(value) >= 10000;
}

function isLowerthan (value) {
    return parseFloat(value) < 999999999999;
}

function isValidNumber (value) {
    return Number.isInteger(value)
}

function isValidFloat(value) {
    return (value % 1 !== 0);
}

function verifamount(value) {

    if (isEmpty(value) && isGreaterthan(value) && isLowerthan(value) && isValidNumber (value) && isValidFloat(value)) {
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


    let parsechampst = parseInt(stchamp);
    let parsechampnd = parseInt(ndchamp);
    let parsechampth = parseInt(thchamp);

    console.log(verifamount(parsechampst));
  
});



