// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarCarrito();
	
  	$('#catalogo').DataTable();
  	
  	//eliminarCarrito();
  	//devolverCarrito();
    
});

async function cargarCarrito(){
	
	const request = await fetch('api/carrito/listar',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	})
	
	const carritos = await request.json();

	let listadoHTML = '<tr><th>Correo del usuario</th><th>Fecha de Alquiler</th><th>Tiempo de Alquiler</th><th style="width:15%;>Imagen</th><th>Estado</th><th>Acciones</th></tr>';
	
	for (let carrito of carritos){
		
		let imagen = '<img src="img/' + carrito.img + '.jpg">';
		
		let botonEliminar = '<a href="#" onclick="eliminarCarrito(' + carrito.id_carrito + ')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
		
		let botonDevolver = '';
        if (carrito.estado === 'Alquilado') {  
            botonDevolver = '<a href="#" onclick="devolverCarrito(\'' + carrito.id_carrito + '\',\'' + carrito.total + '\')" class="btn btn-success btn-circle"><i class="fas fa-check"></i></a>';
        }
				
		let carritohtml = '<tr><td>' + carrito.email + '</td><td>' + carrito.fecha + '</td><td>' + carrito.tiempo + '</td><td>'
		 + imagen + '</td><td>' + carrito.estado + '</td><td>' + botonDevolver + botonEliminar + '</td></tr>';
		
		listadoHTML += carritohtml;
	}


	document.querySelector('#catalogo tbody').outerHTML = listadoHTML;
}

async function eliminarCarrito(id_carrito){
	if(!confirm("Se cancelo el Alquiler?")){
		return;
	}
	
	const request = await fetch('api/carrito/eliminar/' + id_carrito,{
		
		method: 'DELETE',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	location.reload();
}

async function devolverCarrito(id,monto){
	
	let sancion = Number(prompt('Por favor, escriba el monto de la sanción:'));
	
	let datos = {};
	datos.id_carrito = id;
	datos.total = Number(monto) + sancion;
	datos.estado = 'Devuelto';
	datos.sancion = sancion;
	
	const request = await fetch('api/carrito/devolver',{
		
		method: 'PATCH',

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	
	alert('Devolución registrada con éxito');
	location.reload();
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