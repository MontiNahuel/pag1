
function validarEmail() {
    console.log("Funcionando la validacion de Email")
    let email= document.getElementById("email").value
    console.log(email)
    if (email.length == 0) {
        document.getElementById("mensaje").innerHTML="El ingreso de mail no puede ser vacio"
        document.getElementById("mensaje").className= "bg-danger m-2"
        console.log("El ingreso de email es vacio")
        var element = document.querySelector(".bg-danger")
        element.classList.add('animate__animated', 'animate__fadeInDown')
    } else if (email.indexOf("@") == -1){
        document.getElementById("mensaje").innerHTML="El ingreso de mail debe contener al menos un arroba"
        document.getElementById("mensaje").className= "bg-danger m-2"
        console.log("La direccion email no es valida")
        var element = document.querySelector(".bg-danger")
        element.classList.add('animate__animated', 'animate__fadeInDown')
    } else {
        document.getElementById("mensaje").innerHTML="El email fue validado correctamente"
        console.log("El email ingresado es correcto")
        document.getElementById("mensaje").className= "bg-info m-2"
        var element = document.querySelector(".bg-info")
        element.classList.add('animate__animated', 'animate__fadeInDown')
    }
}