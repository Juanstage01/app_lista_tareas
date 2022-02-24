let texto = document.getElementById("inputext"),
    button_add = document.getElementById("btn_add"),
    lista = document.getElementById("list");

function AgregarTareas(){
    var text_input=texto.value,
        newil=document.createElement("il"),
        newa=document.createElement("a"),
        newtext=document.createTextNode(text_input);
    if (text_input === "") {
        texto.className = ("error");
        texto.setAttribute ("placeholder","escribe una tarea valida");
        return false;
    }

    newa.appendChild(newtext);
    newa.setAttribute("href","#"); 
    newil.appendChild(newa);
    lista.appendChild(newil);

    for(var i=0;i<=lista.children.length -1;i++){
        lista.children[i].addEventListener("click",deleteIl); 
    }
    texto.value="";

}
function comprobarInput(){
    texto.className = ("");
    texto.setAttribute ("placeholder","introduce la tarea");
}

function deleteIl(){
    this.parentNode.removeChild(this);
}
texto.addEventListener("click",comprobarInput);

button_add.addEventListener("click",AgregarTareas);























// let miImage = document.querySelector('img');
// miImage.onclick = function () {
//     let miSrc = miImage.getAttribute('src');
//     if (miSrc === 'images/firefox-icon.png') {
//       miImage.setAttribute('src','images/firefox2.png');
//     } else {
//       miImage.setAttribute('src', 'images/firefox-icon.png');
//     }
// }

// let miTitulo = document.querySelector("h1");
// let miBoton = document.querySelector("button"); 

// miBoton.onclick=function(){
//     let nombre = prompt("ingresa tu nombre, por favor");
//     localStorage.setItem("name" , nombre);
//     miTitulo.textContent = "mozaila no se que," + nombre;
// }




// let miBoton = document.querySelector('button');
// let miTitulo = document.querySelector('h1');

// function estableceNombreUsuario() {
//     let miNombre = prompt('Por favor, ingresa tu nombre.');
//     localStorage.setItem('nombre', miNombre);
//     miTitulo.textContent = 'Mozilla es genial,' + miNombre;
// }



// if (!localStorage.getItem('nombre')) {
//     estableceNombreUsuario();
// } else {
//     let nombreAlmacenado = localStorage.getItem('nombre');
//     miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
// }



// miBoton.onclick = function () {
//     estableceNombreUsuario();
// }