function validarFormulario() {
    // capturo con getElementById lo tecleado en el campo de formulario
    try {
        var correo=document.getElementById('correo').value;
        var contrasena=document.getElementById('contrasena').value;
    
        // los patrones en js siguen este guión :   /^    $/.test(variable)
        // el .test(variable) es una comprobación de patrón o "pattern matching"
        // el patrón debe ir entre /^ y $/ 
        if (!(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/.test(correo))||correo.length==0) {
            marcarError('correo');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('correo');
        // este patrón indica al menos una mayúscula, al menos una minúscula, al menos
        // un dígito, y un caracter especial, y longitud entre 6 y 10
        // si tuvieramos que introducir dos veces un campo (correo o contraseña)
        // habría que controlar que los dos valores (el inicial y la repetición)
        // coinciden, comprobándolo con un simple if
        if ( ! (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/.test(contrasena))||contrasena.length==0) {
            marcarError('contrasena');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('contrasena');
        return true;
    }
    catch(ex) {
        alert("Se ha detectado un error. Por favor, póngase en contacto con el administrador.");
        return false;
    }
}


function cambiaReserva(){
    try {
    var idReserva=document.getElementById('idReserva').value;
    var codcli=document.getElementById('codcli').value;
    var fechaEntrada=document.getElementById('fechaEntrada').value;
    var fechaSalida=document.getElementById('fechaSalida').value;
    var numper=document.getElementById('numper').value;
    
        
    
        // los patrones en js siguen este guión :   /^    $/.test(variable)
        // el .test(variable) es una comprobación de patrón o "pattern matching"
        // el patrón debe ir entre /^ y $/ 
        if (!(/^[0-9]+$/.test(idReserva))||idReserva.length==0) {
            marcarError('idReserva');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('idReserva');

        if (!(/^[0-9]+$/.test(codcli))||codcli.length==0) {
            marcarError('codcli');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('codcli');

        if (!(/^[a-z0-9]+$/.test(numper))||numper.length==0 || 0 >=  numper || numper > 6) {
            marcarError('numper');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('numper');


        if (!(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(fechaEntrada))||fechaEntrada.length==0) {
            marcarError('fechaEntrada');
            document.getElementById("fechaEntradaHelp").innerHTML = "Por favor, Pilar, respeta el formato ...";
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('fechaEntrada');

        if (!(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(fechaSalida))||fechaSalida.length==0) {
            marcarError('fechaSalida');
            document.getElementById("fechaSalidaHelp").innerHTML = "Por favor, Pilar, respeta el formato ...";
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('fechaSalida');

        var dateEntrada = new Date(fechaEntrada);
        var dateSalida = new Date(fechaSalida);
        if (dateSalida < dateEntrada) {
            marcarError('fechaEntrada');
            marcarError('fechaSalida');
            document.getElementById("fechaEntradaHelp").innerHTML = "Y también la lógica. Entradas antes que salidas.";
            document.getElementById("fechaSalidaHelp").innerHTML = "Y también la lógica. Entradas antes que salidas.";
            return false;
        }


        return true;
    }
    catch(ex) {
        alert("Se ha detectado un error. Por favor, póngase en contacto con el administrador.");
        return false;
    }

}



function confirmarCodCli() {
    // capturo con getElementById lo tecleado en el campo de formulario
    try {
        var codcli=document.getElementById('codcli').value;
    
        // Sólo números
        if (!(/^[0-9]+$/.test(codcli))||codcli.length==0) {
            marcarError('codcli');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('codcli');

        return confirm("¿Está seguro de que desea eliminar el cliente?"); 
    }


    catch(ex) {
        alert("Se ha detectado un error. Por favor, póngase en contacto con el administrador.");
        return false;
    }
}





function validarCliente() {
    // capturo con getElementById lo tecleado en el campo de formulario
    try {
        var nombreCliente=document.getElementById('nombreCliente').value;
        var apellidoCliente=document.getElementById('apellidoCliente').value;
        var contactoCliente=document.getElementById('contactoCliente').value;
    
        // los patrones en js siguen este guión :   /^    $/.test(variable)
        // el .test(variable) es una comprobación de patrón o "pattern matching"
        // el patrón debe ir entre /^ y $/ 
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(nombreCliente))||nombreCliente.length==0) {
            marcarError('nombreCliente');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('nombreCliente');
        // este patrón indica al menos una mayúscula, al menos una minúscula, al menos
        // un dígito, y un caracter especial, y longitud entre 6 y 10
        // si tuvieramos que introducir dos veces un campo (correo o contraseña)
        // habría que controlar que los dos valores (el inicial y la repetición)
        // coinciden, comprobándolo con un simple if
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(apellidoCliente))||apellidoCliente.length==0) {
            marcarError('apellidoCliente');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('apellidoCliente');

        if (!(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/.test(contactoCliente))||contactoCliente.length==0) {
            marcarError('contactoCliente');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('contactoCliente');
        return true;
    }
    catch(ex) {
        alert("Se ha detectado un error. Por favor, póngase en contacto con el administrador.");
        return false;
    }
}




function confirmarCodCli() {
    // capturo con getElementById lo tecleado en el campo de formulario
    try {
        var codcli=document.getElementById('codcli').value;
    
        // Sólo números
        if (!(/^[0-9]+$/.test(codcli))||codcli.length==0) {
            marcarError('codcli');
            //este return false es para evitar que se produzca el envio onsubmit
            return false;
        }
        else desmarcarError('codcli');

        return confirm("¿Está seguro de que desea eliminar el cliente?"); 
    }


    catch(ex) {
        alert("Se ha detectado un error. Por favor, póngase en contacto con el administrador.");
        return false;
    }
}
function marcarError(elemento) {
    document.getElementById(elemento).style.borderColor = "red";
    document.getElementById(elemento).style.outlineColor= "red";
    document.getElementById(elemento).style.outlineSize= "2px";
    document.getElementById(elemento).style.color= "red";
    document.getElementById(elemento).style.outlineStyle= "solid";
    if (document.getElementById(elemento + "Help")) document.getElementById(elemento + "Help").style.visibility= "visible";
}
function desmarcarError(elemento) {
    document.getElementById(elemento).style.borderColor = "#ced4da";
    if (document.getElementById(elemento + "Help")) document.getElementById(elemento + "Help").style.visibility="hidden";
    document.getElementById(elemento).style.color= "#666";

}