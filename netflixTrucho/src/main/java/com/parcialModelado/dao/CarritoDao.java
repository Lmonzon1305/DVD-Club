package com.parcialModelado.dao;

import java.util.List;

import com.parcialModelado.modelos.Carrito;

import jakarta.transaction.Transactional;

@Transactional
public interface CarritoDao {

	List<Carrito> getCarrito();

	void eliminar(Long id_carrito);

	void devolver(Carrito alquiler);

	void registrar(Carrito alquiler);

}
