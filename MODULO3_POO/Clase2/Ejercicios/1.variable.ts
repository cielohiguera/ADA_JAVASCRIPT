// VAR: 
function ejemploVar() {
    // console.log(variableVar); // undifined por hoisting 
    var variableVar = 'Soy una variable var'
    console.log(variableVar);
}
ejemploVar()

// LET:
function ejemploLet() {
    // console.log(variableLet); // error por hoisting
    let variableLet = 'Soy una variable let'
    console.log(variableLet);
}
ejemploLet()

// CONST:
function ejemploConst() {
    let variableConst = 'Soy una variable const'
    console.log(variableConst);

    //variableConst = "Otro valor" // no puedo asignar otro valor
}
ejemploConst()