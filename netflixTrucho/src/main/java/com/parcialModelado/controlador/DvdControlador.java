package com.parcialModelado.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.parcialModelado.dao.DvdDao;
import com.parcialModelado.modelos.Dvd;

@RestController
public class DvdControlador {

	@Autowired
	private DvdDao dvdDao;
	
	@GetMapping("api/dvd/listar")
	public List<Dvd> getDvd() {
		
	List<Dvd> dvd=dvdDao.getDvd();
	
	return dvd;
	}		

	@DeleteMapping(value="api/dvd/eliminar/{id}")
	public void eliminarDvd(@PathVariable Long id) {
		
		dvdDao.eliminarDvd(id);
	}
}
