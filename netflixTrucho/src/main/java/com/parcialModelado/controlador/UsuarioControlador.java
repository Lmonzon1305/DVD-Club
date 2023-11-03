package com.parcialModelado.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.parcialModelado.dao.UsuariosDao;
import com.parcialModelado.modelos.Usuarios;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;


@RestController
public class UsuarioControlador {
	
	@Autowired
	private UsuariosDao usuariosDao;
	
	@GetMapping("api/usuarios/listar")
	public List<Usuarios> getUsuarios() {
		
	List<Usuarios> user=usuariosDao.getUsuarios();
	
	return user;
	}		

	@DeleteMapping(value="api/usuarios/eliminar/{id}")
	public void eliminar(@PathVariable Long id) {
		
		usuariosDao.eliminar(id);
	}
	
	@PostMapping(value="api/usuarios/registrar")
	public void registrarUsuario(@RequestBody Usuarios usuario) {
		
		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		
		String hash= argon2.hash(1,1024,1,usuario.getPassword());
		
		usuario.setPassword(hash);
		
		usuariosDao.registrar(usuario);
	}
	@PostMapping(value="api/usuarios/login")
	public String login(@RequestBody Usuarios usuario) {
		if(usuariosDao.verificarCredenciales(usuario)) {
			return "OK";
		}
		return "Fail";
	}
}
