let mensajeCosto = ""
let continuar= true
const mensajeInicial = "Ingrese el codigo de la prenda a consultar: \n " +
"a) Canguro retro \n" +
"b) Canguro future \n" +
"c) Campera pana \n" +
"d) Campera franela \n" +
"e) Remera derretidos \n"

function iniciarConsulta () {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()

    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d") {
        alert("ingrese un codigo valido")
    } else{
        switch(seleccion){
case "a":
    mensajeCosto = "El canguro retro cuesta $2500"
    break
case "b":
    mensajeCosto = "El canguro future cuesta $2400"
    break
case "c":
    mensajeCosto = "Las Camperas pana cuestan $3500"
    break
case "d":
    mensajeCosto = "Las Camperas franela cuestan $3000"
    break
case "e":
    mensajeCosto = "Las Remeras derretidos cuestan $900"
    break
 default: console.error("no se deberia ver este mensaje")
        }
        alert(mensajeCosto)
    }
}

function preguntarPrecios() {
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer otro precio?")}
 
   }