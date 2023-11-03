package com.parcialModelado.dao;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.parcialModelado.modelos.Usuarios;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuariosDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public List<Usuarios> getUsuarios() {
		
		String query="from Usuarios";
		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public void eliminar(Long id) {
		
		Usuarios usuario=entityManager.find(Usuarios.class,id);
		
		entityManager.remove(usuario);
	}

	@Override
	public void registrar(Usuarios usuario) {
		
		entityManager.merge(usuario);
	}

	@Override
	public boolean verificarCredenciales(Usuarios usuario) {
			
			String query="FROM Usuarios Where email = :email";
			
			List<Usuarios> lista= entityManager.createQuery(query)
					.setParameter("email",usuario.getEmail()).getResultList();
			
			if (lista.isEmpty()) {
				return false;
			}
			
			String passHasheada=lista.get(0).getPassword();
			
			Argon2 argon2= Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
			
			boolean passEsIgual= argon2.verify(passHasheada, usuario.getPassword());
			return passEsIgual;
	}
}
