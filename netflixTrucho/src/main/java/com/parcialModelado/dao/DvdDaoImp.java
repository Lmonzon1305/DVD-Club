package com.parcialModelado.dao;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.parcialModelado.modelos.Dvd;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class DvdDaoImp implements DvdDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public List<Dvd> getDvd() {
		
		String query="from Dvd";
		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public void eliminarDvd(Long id) {
		
		Dvd dvd=entityManager.find(Dvd.class,id);
		
		entityManager.remove(dvd);
	}
}
