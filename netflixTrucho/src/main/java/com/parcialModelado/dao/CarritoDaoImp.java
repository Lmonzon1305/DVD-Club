package com.parcialModelado.dao;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.parcialModelado.modelos.Carrito;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class CarritoDaoImp implements CarritoDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public List<Carrito> getCarrito() {
		
		String query="from Carrito";
		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public void eliminar(Long id_carrito) {
		
		Carrito alquiler=entityManager.find(Carrito.class,id_carrito);
		
		entityManager.remove(alquiler);
	}

	@Override
	public void devolver(Carrito alquiler) {
		
		Long id = alquiler.getId_carrito();
		
		Carrito carrito=entityManager.find(Carrito.class,id);
		
		carrito.setEstado(alquiler.getEstado());
		carrito.setSancion(alquiler.getSancion());
		carrito.setTotal(alquiler.getTotal());
		
		entityManager.merge(carrito);
	}

	@Override
	public void registrar(Carrito alquiler) {
		
		entityManager.merge(alquiler);
	}
}
