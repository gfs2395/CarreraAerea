let ventana = "";
document.getElementsByTagName("button")[1].addEventListener("click", function () {
   ventana =  window.open("../src/ajustes.html", "", "resizable=100,width=300, height=200");
});
function finSeleccion(m) {
    console.log(m.dataset.id)
	ventana.close()
}
