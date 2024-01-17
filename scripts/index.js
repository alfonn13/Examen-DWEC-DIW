const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const enviar = document.querySelector("#enviar")
const info = document.querySelector('#info')
const mensaje = document.querySelector("#mensaje")
const errores = document.querySelector("#errores")
let mensajesErrores = []
 
const validar = evento => {
    evento.preventDefault()
    mensajesErrores = []

    //Nombre
    nombre.value.trim().length === 0 && mensajesErrores.push('El campo nombre no puede estar vacío')

    !/^[A-Z]*$/.test(nombre.value.trim()) && mensajesErrores.push('El nombre no empieza por mayuscula')

    //Correo
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesErrores.push('Introduce una dirección de correo electrónico válida')

    //Mensaje
    mensaje.value.trim().length < 10 && mensajesErrores.push('Mensaje demasiado corto')

    if (mensajesErrores.length === 0 && confirm("¿Estas seguro de enviar el formulario?")){
       formulario.submit()
    } else if (mensajesErrores.length > 0){
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function (mensaje){
            const Li = document.createElement("li")
            Li.textContent = mensaje
            errores.appendChild(Li)
        })
    }
 
}
 
formulario.addEventListener("submit", validar)

