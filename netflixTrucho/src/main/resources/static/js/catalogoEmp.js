// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarDvd();
	
  	$('#catalago').DataTable();
  	
  	//eliminarDvd();
  	
  	//busquedaDvd();
  
});

async function cargarDvd(){
	
	const request = await fetch('api/dvd/listar',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	const dvds = await request.json();

	let listadoHTML = '<tr><th style="width:20%;">Nombre</th><th style="width:40%;">Descripción</th><th style="width:10%;">Categoria</th><th style="width:15%;">Imagen</th><th style="width:10%;">Acciones</th></tr>';
	
	for (let dvd of dvds){
		
		let botonEliminar = '<a href="#" onclick="eliminarDvd(' + dvd.id_dvd + ')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
		
		let imagen = '<img src="img/' + dvd.img + '.jpg">';
		
		let dvdhtml = '<tr><td>' + dvd.nombre + '</td><td>' + dvd.descripcion + '</td><td>' + dvd.categoria + '</td><td>'
		 + imagen + '</td><td>' + botonEliminar + '</td></tr>';
		
		listadoHTML +=dvdhtml;
	}

	document.querySelector('#catalago').innerHTML = listadoHTML;
}
async function eliminarDvd(id){
	if(!confirm("Desea eliminar el DVD?")){
		return;
	}
	
	const request = await fetch('api/dvd/eliminar/' + id,{
		
		method: 'DELETE',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	location.reload();
}

function busqueda() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  table = document.getElementById("catalago");
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