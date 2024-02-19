function aumentarFuente(elemento) {
    var estilo = window.getComputedStyle(elemento); // Obtenemos los estilos del elemento
    var fontSize = parseInt(estilo.fontSize); // Obtenemos el tamaño actual de la fuente y lo convertimos a un entero
    elemento.style.fontSize = (fontSize + 10) + 'px'; // Aumentamos el tamaño de la fuente en 20 píxeles y lo aplicamos al elemento
    elemento.onmouseover = null; // Eliminamos el evento onmouseover para que no se vuelva a ejecutar
}

function saludar() {
    alert("¡Hola! Soy Afrodita, la diosa del amor y la belleza.");
}