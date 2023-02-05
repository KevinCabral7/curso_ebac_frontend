const form = document.getElementById('form-validar')
const result = document.getElementById('result')

formEValido = false
function validarNumero(numberA, numberB){
    if(numberB>numberA){
        return formEValido = true
    }else{
        return formEValido = false
    }
}

 
function sucesso(){
    result.style.display = 'block'
    result.style.padding = "5px 20px"
    result.style.backgroundColor = "rgb(30, 255, 0)"
    result.innerHTML = "Sucesso"
}
function erro(){
    result.style.display = 'block'
    result.style.padding = "5px 20px"
    result.style.backgroundColor = "rgb(231, 12, 12)"
    result.innerHTML = "Erro"
}


form.addEventListener('submit', function(e) {
    e.preventDefault()

    var numberA = document.getElementById('numeroA').value
    var numberB = document.getElementById('numeroB').value

    formEValido = validarNumero(numberA, numberB)

    if (formEValido === true){
        sucesso()
    }else{
        erro()
    }
})