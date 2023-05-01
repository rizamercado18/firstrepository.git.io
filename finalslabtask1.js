function add(){
    number1 = parseInt(form.number1.value);
    number2 = parseInt(form.number2.value);
    result = number1 + number2;
    form.result.value=result;
}

function subtract(){
    number1 = parseInt(form.number1.value);
    number2 = parseInt(form.number2.value);
    result = number1 - number2;
    form.result.value=result;
}

function multiply(){
    number1 = parseInt(form.number1.value);
    number2 = parseInt(form.number2.value);
    result = number1 * number2;
    form.result.value=result;
}

function divide(){
    number1 = parseInt(form.number1.value);
    number2 = parseInt(form.number2.value);
    result = number1 /number2;
    form.result.value=result;
}

function clearbtn(){
    number1 = parseInt(form.number1.value);
    number2 = parseInt(form.number2.value);
    form.number1.value = ""
    form.number2.value = ""
    form.result.value = ""
}

function alertbtn(){
   alert("Work of Issa Dimalanta and Riza Mercado")
}