<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de formularios con Vanilla JavaScript</title>
    <!-- enlazamos con el estilo de bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <style>
        .gris {color: #666;}
    </style>
    <!-- el javascript debe sacarse fuera y enlazarse. El atributo defer hace
         que, estando en un archivo externo, no se cargue hasta que lo haga 
         toda la página. 
         Además, el código debería ser REFACTORIZADO, para evitar repeticiones
         de ciertas instrucciones y dejarlo aun más modular-->
    <script defer>
        function validarFormulario() {
            // capturo con getElementById lo tecleado en el campo de formulario
            var num1=document.getElementById('numero1').value;
            var num2=document.getElementById('numero2').value;
            var ident=document.getElementById('identificador').value;
            var correo=document.getElementById('email').value;
            var contrasena=document.getElementById('pass').value;
            // con la casilla de verificación se coge el elemento entero, no sólo el valor
            var confirmacion= document.getElementById('acepto');
            var prov= document.getElementById('provincia').value;
            
            // podría si quiero, preguntar las condiciones por separado
            // y emitir diferente mensaje de error, en el caso de preguntar
            // por más de una condición
            if (isNaN(num1)||num1.length==0) {
                // alert(num1+" no es un número"); el alert es muy agresivo, pondré mensaje de error
                marcarError('numero1');
                //este return false es para evitar que se produzca el envio onsubmit
                return false;
            }
            if (isNaN(num2)||num2.length==0) {
                // alert(num1+" no es un número"); el alert es muy agresivo, pondré mensaje de error
                marcarError('numero2');
                //este return false es para evitar que se produzca el envio onsubmit
                return false;
            }
            if ( ! (/^[a-zñ0-9A-ZÑ]{6,15}$/.test(ident))) {
                marcarError('identificador');
                //este return false es para evitar que se produzca el envio onsubmit
                return false;
            }
            // los patrones en js siguen este guión :   /^    $/.test(variable)
            // el .test(variable) es una comprobación de patrón o "pattern matching"
            // el patrón debe ir entre /^ y $/ 
            if ( ! (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(correo))||correo.length==0) {
                marcarError('email');
                //este return false es para evitar que se produzca el envio onsubmit
                return false;
            }
            // este patrón indica al menos una mayúscula, al menos una minúscula, al menos
            // un dígito, y un caracter especial, y longitud entre 6 y 10
            // si tuvieramos que introducir dos veces un campo (correo o contraseña)
            // habría que controlar que los dos valores (el inicial y la repetición)
            // coinciden, comprobándolo con un simple if
            if ( ! (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/.test(contrasena))||contrasena.length==0) {
                marcarError('pass');
                //este return false es para evitar que se produzca el envio onsubmit
                return false;
            }
            // si hay que clickar en la casilla obligatoriamente, lo exigimos aquí
            if( !(confirmacion.checked) ) {
                marcarCheckError('acepto');
                return false;
            }
            // con el campo select, el problema es que no se haya desplegado, por lo que
            // adoptaría el primer valor del desplegable, esto es, 0 en este caso
            if (prov==0){
                marcarError('provincia');
                return false;
            }
            // si todo va bien, devuelve true, y se produce el envio del formulario
            return true;
        }
​
        // función para marcar error en todos los tipos de campo, salvo checkbox
        function marcarError(elemento){
            document.getElementById(elemento).style.borderColor="red";
            document.getElementById(elemento+"Help").style.color="red";
        }
​
        // función para marcar error en checkbox. Es diferente
        function marcarCheckError(elemento){
            document.getElementById(elemento+"Label").style.color="red";
        }
​
        // función para desmarcar error en todos los campos
        function desmarcarError(elemento){
            document.getElementById(elemento).style.borderColor="#ced4da";
            document.getElementById(elemento+"Help").style.color="#666";
        }
    </script>
</head>
<body>
    <!-- en este formulario, hacemos un ejemplo de cada tipo (salvo los 2 primeros
         que son iguales y lo hemos utilizado como ejemplo para refactorizar)-->
    <form class="col-md-6 col-sm-10 col-11 border border-primary p-5 mx-auto" action="loquesea.jsp" method="POST">
      <h2>Introducción de datos</h2>
        <!-- vamos a validar con un js antes de enviar el formulario al backend-->
        <div class="form-group">
          <label for="numero1">Introduce un número:</label>
          <input type="text" class="form-control" 
                 id="numero1" name="numero1" 
                 aria-describedby="numero1Help"
                 onfocus="desmarcarError('numero1')">
          <small id="numero1Help" class="form-text gris">Obligatorio, entero o real</small>
        </div>
        <div class="form-group">
            <label for="numero2">Introduce otro número:</label>
            <input type="text" class="form-control" 
                   id="numero2" name="numero2"
                   aria-describedby="numero2Help"
                   onfocus="desmarcarError('numero2')">
            <small id="numero2Help" class="form-text">Obligatorio, entero o real</small>
          </div>
          <div class="form-group">
            <label for="identificador">Introduce tu identificador:</label>
            <input type="text" class="form-control" 
                   id="identificador" name="identificador"
                   aria-describedby="identificadorHelp"
                   onfocus="desmarcarError('identificador')">
            <small id="identificadorHelp" class="form-text">Solo letras y dígitos, entre 6 y 15 caracteres</small>
          </div>
          <div class="form-group">
            <label for="email">Introduce tu correo electrónico:</label>
            <input type="text" class="form-control" 
                   id="email" name="email"
                   aria-describedby="emailHelp"
                   onfocus="desmarcarError('email')">
            <small id="emailHelp" class="form-text">Obligatorio, correo válido</small>
          </div>
          <div class="form-group">
            <label for="pass">Introduce tu contraseña:</label>
            <input type="password" class="form-control" 
                   id="pass" name="pass"
                   aria-describedby="passHelp"
                   onfocus="desmarcarError('pass')">
            <small id="passHelp" class="form-text">Obligatorio, may, min, dígito y car. especiales, longitud entre 6 y 10</small>
          </div>
          <div class="form-group">
            <label for="provincia">Elige provincia:</label>
            <select class="form-control" id="provincia"
                    onfocus="desmarcarError('provincia')">
              <option value="0">-- elige provincia</option>
              <option value="28">Málaga</option>
              <option value="18">Granada</option>
              <option value="04">Almería</option>
            </select>
            <small id="provinciaHelp" class="form-text">Despliega para elegir</small>
          </div>
          <!-- campo radio button, hay que elegir uno -->
          <p>Elige una opción</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="opcion" id="opcion1" value="option1">
            <label class="form-check-label" for="opcion1">
              Opción una 
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="opcion" id="opcion2" value="option2">
            <label class="form-check-label" for="opcion2">
              Opción dos
            </label>
          </div>
          <!-- ponemos una casilla de verificación, que sea obligatorio marcar -->
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" 
                   id="acepto" name="acepto"
                   onfocus="desmarcarError('acepto')">
            <label class="form-check-label" for="acepto" id="aceptoLabel">Acepto las condiciones</label>
          </div>
        <!-- al pulsar el botón de enviar, previamente, onclick, se llama a una 
             función js que va a validar todos los campos -->  
        <button onclick="return validarFormulario()" type="submit" class="btn btn-primary">A validar!</button>
      </form>   
​
</body>
</html>