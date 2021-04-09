function crearElemento(elemento,clase,texto,imagesrc){
    let tag = document.createElement(elemento);
    tag.appendChild(document.createTextNode(texto))
    tag.classList.add(clase)
    imagesrc!=undefined?tag.src=imagesrc:null;
    return tag;
}
function mostrarFicha(target,player){
    document.getElementsByClassName("playerbox").length >=1? target.parentNode.removeChild(document.getElementsByClassName("playerbox")[0]) : null
    console.log(player[0].avatar)
    let playerbox = crearElemento("div","playerbox","")
    playerbox.appendChild(crearElemento("p","text",target.value))
    playerbox.appendChild(crearElemento("img","avatar","","../assets/img/"+player[0].avatar))
    playerbox.dataset.id = player[0].id
    let eleccionFinalBoton = crearElemento("button","choose","Elegir");
    eleccionFinalBoton.addEventListener("click",(e)=>{console.log(e.target.parentNode)})
    playerbox.appendChild(eleccionFinalBoton);
    target.parentNode.appendChild(playerbox);
        //playerBox.appendChild(Pintura.crearElemento("img","avatar","",`../assets/img/${Contendientes.players[key].avatar}`))   
    
}
function ajustarImagen(){

}
export {crearElemento,mostrarFicha}