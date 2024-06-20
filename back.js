function isEmpty (value) {
    return value != "";
}

function isGreaterthan (value) {
    return parseFloat(value) >= 10000;
}

function isLowerthan (value) {
    return parseFloat(value) < 999999999999;
}

// function isValidNumber (value) {
//     return Number.isInteger((value))
// }  


function isValidInt(value) {
    if (!isNaN(parseInt(value, 10)) && typeof value !== 'string') {
        return true;
    } 
    else {
        return false;
    }
}

function isValidFloat(value) {
    return (value % 1 !== 0);
}

function verifamount(value) {

    if (isEmpty(value) && isGreaterthan(value) && isLowerthan(value) && isValidInt(value) && !isValidFloat(value)) {
        return true
    }
    else {
        return false
    }
}


// console.log(verifamount(10000));



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

    // let type = typeof parsechampst

    // console.log(type)

    // console.log(parsechampst)

    console.log(verifamount(parsechampst));
});



