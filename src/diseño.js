function crearElemento(elemento, clase, texto, imagesrc) {
    let tag = document.createElement(elemento);
    tag.appendChild(document.createTextNode(texto))
    tag.classList.add(clase)
    imagesrc != undefined ? tag.src = imagesrc : null;
    return tag;
}
function mostrarFicha(target, player) {

    document.getElementsByClassName("playerbox").length >= 1 ? target.parentNode.removeChild(document.getElementsByClassName("playerbox")[0]) : null
    console.log(player[0].avatar)
    let playerbox = crearElemento("div", "playerbox", "")
    playerbox.appendChild(crearElemento("p", "text", target.value))
    playerbox.appendChild(crearElemento("img", "avatar", "", "../assets/img/" + player[0].avatar))
    playerbox.appendChild(crearFicha(Object.entries(player[0])))
    playerbox.dataset.id = player[0].id
    let eleccionFinalBoton = crearElemento("button", "choose", "Elegir");
    eleccionFinalBoton.addEventListener("click", (e) => { window.opener.finSeleccion(e.target.parentNode) })
    playerbox.appendChild(eleccionFinalBoton);
    target.parentNode.appendChild(playerbox);
    //playerBox.appendChild(Pintura.crearElemento("img","avatar","",`../assets/img/${Contendientes.players[key].avatar}`))   

}
function crearFicha(playerValues) {
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    playerValues.forEach(element => {
        console.log("saco elements",element[0]);
        let tr = document.createElement("tr")
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(element[0]))
        let tdNombre = crearElemento("td","x",element[1]);
        tr.appendChild(th);
        tr.appendChild(tdNombre);
        tblBody.appendChild(tr);
        

    });
    tabla.appendChild(tblBody);

    return tabla;
}


export { crearElemento, mostrarFicha }