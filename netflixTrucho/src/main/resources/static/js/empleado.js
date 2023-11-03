$(document).ready(function() {
	
	let contador = 0;
	let elemento = document.getElementById("loginEmpleado");

	elemento.addEventListener("click", function() {
    contador++;
    if (contador === 5) {
		
        window.location.href = "usuarios.html";
        
        contador = 0;
    	}
	});
	
});	