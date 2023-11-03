// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarDvd()
            
    //registrarCarrito();
    
  	$('#catalogo').DataTable();

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
					
		let botonAlquilar = '<a href="#" onclick="registrarCarrito(\'' + dvd.nombre + '\',\'' + dvd.img + '\')" class="btn btn-success btn-circle"><i class="fas fa-check"></i></a>';
		
		let imagen = '<img src="img/' + dvd.img + '.jpg">'
		
		let dvdhtml = '<tr><td>' + dvd.nombre + '</td><td>' + dvd.descripcion + '</td><td>' + dvd.categoria + '</td><td>'
		 + imagen + '</td><td>' + botonAlquilar + '</td></tr>';
		
		listadoHTML +=dvdhtml;
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

async function registrarCarrito(nombre,img) {
	
	let fecha = new Date();
	let dia = String(fecha.getDate() + 1).padStart(2, '0'); // Los dias en JavaScript empiezan desde 0
	let mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan desde 0
	let año = fecha.getFullYear();
	let fechaActual = `${año}-${mes}-${dia}`;
	
	let opciones = [1, 3, 7];
	let periodoAlquiler = 0;

	while (!opciones.includes(periodoAlquiler)) {
    	periodoAlquiler = Number(prompt('Por favor, escriba la cantidad de dias:\nAlquilar 1 día por $20 \nAlquilar 3 dias por $50 \nAlquilar 7 dias por $100'));
	}	
	
	let totalAlquiler = 0;
	if(periodoAlquiler==1){totalAlquiler = 20;}
	if(periodoAlquiler==3){totalAlquiler = 50;}
	if(periodoAlquiler==7){totalAlquiler = 100;}

	let datos = {};
	datos.fecha = fechaActual;
	datos.tiempo = periodoAlquiler;
	datos.total = totalAlquiler;
	datos.estado = "Alquilado"
	datos.email = localStorage.getItem("usuario");
	datos.nombre = nombre
    datos.img = img;

	console.log(datos);

	const request = await fetch('api/carrito/registrar', {

		method: 'POST',

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});

	alert('Alquiler registrado con éxito');
}