function validarFormulario() {
    // capturo con getElementById lo tecleado en el campo de formulario
    var nombre=document.getElementById('nombre').value;
    var apellido=document.getElementById('apellido').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
   
   if ( ! (/^[a-zA-Z]+ [a-zA-Z]$/.test(nombre))||nombre.length==0) {
    marcarError('nombre');
    //este return false es para evitar que se produzca el envio onsubmit
    return false;
   }

   if ( ! (/^[a-zA-Z]+ [a-zA-Z]$/.test(apellido))||apellido.length==0) {
    marcarError('apellido');
    //este return false es para evitar que se produzca el envio onsubmit
    return false;
   }

    // los patrones en js siguen este guión :   /^    $/.test(variable)
    // el .test(variable) es una comprobación de patrón o "pattern matching"
    // el patrón debe ir entre /^ y $/ 
    if ( ! (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/.test(correo))||correo.length==0) {
        marcarError('correo');
        //este return false es para evitar que se produzca el envio onsubmit
        return false;
    }



    // este patrón indica al menos una mayúscula, al menos una minúscula, al menos
    // un dígito, y un caracter especial, y longitud entre 6 y 10
    // si tuvieramos que introducir dos veces un campo (correo o contraseña)
    // habría que controlar que los dos valores (el inicial y la repetición)
    // coinciden, comprobándolo con un simple if
    
    if ( ! (/^([0-9]{15})$/.test(telefono))||telefono.length==0) {
        marcarError('telefono');
        //este return false es para evitar que se produzca el envio onsubmit
        return false;
    }
}
function marcarError(elemento) {
    document.getElementById(elemento).style.borderColor = "red";
    document.getElementById(elemento).style.outlineColor= "red";
    document.getElementById(elemento).style.outlineSize= "2px";
    document.getElementById(elemento).style.color= "red";
    document.getElementById(elemento).style.outlineStyle= "solid";
    document.getElementById(elemento + "Help").style.visibility= "visible";
}
function desmarcarError(elemento) {
    document.getElementById(elemento).style.borderColor = "#ced4da";
    document.getElementById(elemento + "Help").style.visibility="hidden";
    document.getElementById(elemento).style.color= "#666";
    
}