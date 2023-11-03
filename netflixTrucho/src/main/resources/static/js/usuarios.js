// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarUsuarios();
	
  	$('#usuarios').DataTable();
  
 	//eliminarUsuario();
  
});

async function cargarUsuarios(){
	
	const request = await fetch('api/usuarios/listar',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	const usuarios = await request.json();

	let listadoHTML = '<tr><th>ID</th><th>Nombre y Apellido</th><th>Email</th><th>Telefono</th><th>Acciones</th></tr>';
	
	for (let usuario of usuarios){
		
		let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		
		let usuariohtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
		 + usuario.email + '</td><td>' + usuario.telefono + '</td><td>' + botonEliminar + '</td></tr>';
		
		listadoHTML +=usuariohtml;
	}


	document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
}

async function eliminarUsuario(id){
	if(!confirm("Desea eliminar el usuario?")){
		return;
	}
	
	const request = await fetch('api/usuarios/eliminar/' + id,{
		
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
  table = document.getElementById("usuarios");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
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