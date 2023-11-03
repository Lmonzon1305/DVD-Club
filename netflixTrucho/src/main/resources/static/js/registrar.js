// Call the dataTables jQuery plugin
$(document).ready(function() {

	//registrarUsuarios();

});

async function registrarUsuarios() {

	let datos = {};
	datos.nombre = document.getElementById('txtNombre').value;
	datos.apellido = document.getElementById('txtApellido').value;
	datos.email = document.getElementById('txtEmail').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	datos.password = document.getElementById('txtPassword').value;

	let repetirpassword = document.getElementById('txtRepetirPassword').value;

	if (repetirpassword !== datos.password) {

		alert("Las contraseñas no son las mismas");
		return;
	}

	const request = await fetch('api/usuarios/registrar', {

		method: 'POST',

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});

	alert('Usuario registrado con éxito');

	window.location.href = 'login.html';
}