import * as Contendientes from './players.js';
import * as Pintura from './diseño.js';

let selectChoose = Pintura.crearElemento("select","select","");
let playerBox = Pintura.crearElemento("div","player","");
let disabledOption = Pintura.crearElemento('option','option',`Seleccione`);
disabledOption.disabled = true;
disabledOption.selected = true;

selectChoose.appendChild(disabledOption)
for (const key in Contendientes.players) {
    let opcion = Pintura.crearElemento('option','option',`${Contendientes.players[key].nombre}`);
    selectChoose.appendChild(opcion);
}
selectChoose.addEventListener("change",(e)=>Pintura.mostrarFicha(e.target,buscarJugador(Contendientes,e.target.value)));
document.getElementsByClassName("presentacion")[0].appendChild(selectChoose);
function buscarJugador(Contendientes2,selected){
    let propertyNames = Object.entries(Contendientes2) //Despues de pruebas con fetch y aparte que no me dejara aplicar el filter si exporto los players desde un modulo, pero si me dejaba si lo hacia directamente en el script
    //FInalmente con object.entries me deja manejarlo en array para el filter
    //https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
    let bigCities = propertyNames[0][1].filter(actor => actor.nombre == selected);
    console.log("big",bigCities)
    return bigCities
}

