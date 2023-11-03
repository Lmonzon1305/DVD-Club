package com.parcialModelado.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.parcialModelado.dao.CarritoDao;
import com.parcialModelado.modelos.Carrito;

@RestController
public class CarritoControlador {
	
	@Autowired
	private CarritoDao carritoDao;
	
	@GetMapping("api/carrito/listar")
	public List<Carrito> getCarrito() {
		
	List<Carrito> alquiler=carritoDao.getCarrito();
	
	return alquiler;
	}		

	@DeleteMapping(value="api/carrito/eliminar/{id_carrito}")
	public void eliminar(@PathVariable Long id_carrito) {
		
		carritoDao.eliminar(id_carrito);
	}
	
	@PostMapping(value="api/carrito/registrar")
	public void registrarCarrito(@RequestBody Carrito alquiler) {
		
		carritoDao.registrar(alquiler);
	}
	@PatchMapping(value="api/carrito/devolver")
	public void devolver(@RequestBody Carrito alquiler) {
		
		carritoDao.devolver(alquiler);
	}
}
