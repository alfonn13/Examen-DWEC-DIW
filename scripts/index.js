/*Alfonso Reviejo Valle
Github: https://github.com/alfonn13/Examen-DWEC-DIW
*/

const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const enviar = document.querySelector("#enviar")
const info = document.querySelector('#info')
const mensaje = document.querySelector("#mensaje")
const errores = document.querySelector("#errores")
const radio = document.querySelector("#radio")
const radio1 = document.querySelector("#radio1")
let mensajesErrores = []
 
const validar = evento => {
    evento.preventDefault()
    mensajesErrores = []

    //Nombre
    nombre.value.trim().length === 0 && mensajesErrores.push('El campo nombre no puede estar vacío')

    !/^[A-Z][Ña-zñáéíóúÁÉÍÓÚ'° ]+$/.test(nombre.value.trim()) && mensajesErrores.push('El nombre no empieza por mayuscula')

    //Correo
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesErrores.push('Introduce una dirección de correo electrónico válida')

    //Mensaje
    mensaje.value.trim().length < 10 && mensajesErrores.push('Mensaje demasiado corto')

    if (mensajesErrores.length === 0 && confirm("¿Estas seguro de enviar el formulario?")){
        alert("Enviado")
        formulario.submit()
    } else if (mensajesErrores.length > 0){
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function (mensaje){
            const li = document.createElement("li")
            li.textContent = mensaje
            errores.appendChild(li)
        })
    }
}


info.addEventListener("click", (e)=>{
    e.preventDefault();
    radio.checked && alert("Hola")
    radio1.checked && alert("Adios")
})

formulario.addEventListener("submit", validar)

