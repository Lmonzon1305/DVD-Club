// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarCarrito();
	
  	$('#catalogo').DataTable();
    
});

async function cargarCarrito(){
	
	const request = await fetch('api/carrito/listar',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	const carritos = await request.json();

	let listadoHTML = '<tr><th>Nombre</th><th>Fecha de Alquiler</th><th>Tiempo de Alquiler</th><th style="width:15%;>Imagen</th><th>Estado</th></tr>';
	
	for (let carrito of carritos){
		
		if ( carrito.email == localStorage.getItem("usuario") ){
		let imagen = '<img src="img/' + carrito.img + '.jpg">';
				
		let carritohtml = '<tr><td>' + carrito.nombre + '</td><td>' + carrito.fecha + '</td><td>' + carrito.tiempo + '</td><td>'
		 + imagen + '</td><td>' + carrito.estado + '</td></tr>';
		
		listadoHTML += carritohtml;
		}
	}


	document.querySelector('#catalogo tbody').outerHTML = listadoHTML;
}

function busqueda() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  table = document.getElementById("catalogo");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}