$(document).ready(function(){
	//iniciarSesion();
});

async function iniciarSesion(){
	let datos={};
	let usuario = document.getElementById('txtEmail').value;
	
	datos.email= usuario;
	
	datos.password= document.getElementById('txtPassword').value;
	
	const request= await fetch('api/usuarios/login',{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	
	const respuesta = await request.text();
	
	if(respuesta==='OK'){
		window.location.href='catalogo.html';
		localStorage.setItem ("usuario", usuario);
	}else{
		alert("las credenciales no coinsiden. Intente nuevamente");
	}
}