// Sleccion

//ID

let eleID = document.getElementById("parrafo1")
eleID.innerHTML="HTML"

//clase

let eleClase = document.getElementsByClassName("parrafos")
console.log(eleClase.length);
eleClase[1].innerHTML = "CSS";

//etiqueta

let eleEtiqueta = document.getElementsByTagName("p")
console.log(eleEtiqueta.length);
eleClase[2].innerHTML = "JavaScript";

//modificacion estilo
eleID.style.background = "black";
eleID.style.color = "white";
eleID.style.borderRadius = "8px";
eleID.style.width = "250px";
eleID.style.textAlign="center";