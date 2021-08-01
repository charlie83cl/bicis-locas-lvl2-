var select = document.getElementsByTagName('select');
var inputs = document.querySelectorAll('input');
var divTool = document.getElementsByClassName('tooltip');
var spanToolText = document.getElementsByClassName('tooltiptext');

  function convertToCapitalLetter(string,x){
    var toLowerCase = string.toLowerCase();
    var capitalLetter=toLowerCase.charAt(0).toUpperCase()+toLowerCase.slice(1);
    return inputs[x].value = capitalLetter;
  }


  function validateForm(){
//nombre
    if (inputs[0].value == "" ){
        spanToolText[0].innerHTML="Ingresar tu nombre es obligatorio";
        divTool[0].style.visibility="visible";
        spanToolText[0].style.visibility="visible";

    } else if (/^[a-zA-Z_áéíóúñ\s]*$/.test(inputs[0].value) != true ){
        spanToolText[0].innerHTML="ese es tu nombre?";
        divTool[0].style.visibility="visible";
        spanToolText[0].style.visibility="visible";

    } else {
      spanToolText[0].innerHTML="";
      divTool[0].style.visibility="hidden";
      spanToolText[0].style.visibility="hidden";

    }
  //apellido
    if (inputs[1].value == ""){
        spanToolText[1].innerHTML="Ingresar tu Apellido es obligatorio";
        divTool[1].style.visibility="visible";
        spanToolText[1].style.visibility="visible";

    } else if (/^[a-zA-Z_áéíóúñ\s]*$/.test(inputs[1].value) == false ){
        spanToolText[1].innerHTML="ese es tu apellido?";
        divTool[1].style.visibility="visible";
        spanToolText[1].style.visibility="visible";

    } else {
      spanToolText[1].innerHTML="";
      divTool[1].style.visibility="hidden";
      spanToolText[1].style.visibility="hidden";

    }
//email
    if (inputs[2].value == ""){
        spanToolText[2].innerHTML="Debes ingresa un Correo Electrónico";
        divTool[2].style.visibility="visible";
        spanToolText[2].style.visibility="visible";

    } else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputs[2].value) == false){
        spanToolText[2].innerHTML="Ingresa un Correo Electrónico Válido";
        divTool[2].style.visibility="visible";
        spanToolText[2].style.visibility="visible";

    } else {
      spanToolText[2].innerHTML="";
      divTool[2].style.visibility="hidden";
      spanToolText[2].style.visibility="hidden";

    }
  //contraseña
    if (inputs[3].value == "" ){
        spanToolText[3].innerHTML="Ingresa una contraseña válida";
        divTool[3].style.visibility="visible";
        spanToolText[3].style.visibility="visible";

    }else if (inputs[3].value.length < 6 || inputs[3].value == "contraseña" || inputs[3].value == "123456" || inputs[3].value == "098765"){
        spanToolText[3].innerHTML="Debes ingresar 6 o más carácteres.";
        divTool[3].style.visibility="visible";
        spanToolText[3].style.visibility="visible";

    } else {
      spanToolText[3].innerHTML="";
      divTool[3].style.visibility="hidden";
      spanToolText[3].style.visibility="hidden";
    }
//tipo de bici
    if (select[0].selectedIndex == 0){
      spanToolText[4].innerHTML="Selecciona Tipo de Bici";
      divTool[4].style.visibility="visible";
      spanToolText[4].style.visibility="visible";

    }else{
      spanToolText[4].innerHTML="";
      divTool[4].style.visibility="hidden";
      spanToolText[4].style.visibility="hidden";

    }

  //fin function
  }
