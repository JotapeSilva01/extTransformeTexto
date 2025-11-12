window.document.addEventListener( "DOMContentLoaded", function () {
    document.getElementById("btnMaiuscula").addEventListener("click", function (){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#resultado").innerHTML = inputText.toUpperCase()
    })

    document.getElementById("btnMinuscula").addEventListener("click", function (){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#resultado").innerHTML = inputText.toLowerCase()
    })

    document.getElementById("btnPrimeira").addEventListener("click", function (){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#resultado").innerHTML = inputText[0].toUpperCase() + inputText.slice(1).toLowerCase()
    })

    
    document.getElementById("btnLimpar").addEventListener("click", function (){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#resultado").innerHTML = ''
        document.querySelector("#input-text").value = ''

    })

} )