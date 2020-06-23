//validar el formulario
const inputs = document.querySelectorAll('form .campo input');
// Para atrapar todos los campos que este en el form y cuya clase sea ,campo y sea input
//console.log(inputs); 

//LISTENER DE INPUTS
inputs.forEach(input =>{
    input.addEventListener('blur',validarInput);
});
inputs.forEach(input =>{
    input.addEventListener('input',validarInput);
});

function validarInput(e){
    /*Para ver en la consola lo que escribo */
    //console.log(e.target.value);
    const estado = ['valido','no-valido'];
    let clase;
    if(e.target.value.length === 0){
        clase = estado[1];
    }else{
        clase = estado[0];
    }

    //barra erronea
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Mensaje de error al no ingresar datos
    if(clase === 'no-valido'){
// SI NO EXISTE LA ALERTA ENTONCES NO LA REPITAS
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
        //Construccion de mensaje de error

            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            // insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    }else{
        //Limpiar el mensaje de error si existe
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }

}


//MOSTRAR Y OCULTAR PASSWORD
const mostrar_pass = document.querySelector('form .campo span');
//console.log(mostrar);

mostrar_pass.addEventListener('click',e=>{
    //Aqui seleccionamos el campo conforme al id
    const passwordInput = document.querySelector("#password");
    if(e.target.classList.contains('mostrar')){
        //mostrar password en texto
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        //cambiamos a texto
        passwordInput.type = 'text';
    }else{
        //mostrar password con puntos
        e.target.classList.add('mostrar');
        //cambiamos el texto a pass
        e.target.textContent = 'Mostrar';
        // cambiamos a pass
        passwordInput.type = 'password';
    }
})