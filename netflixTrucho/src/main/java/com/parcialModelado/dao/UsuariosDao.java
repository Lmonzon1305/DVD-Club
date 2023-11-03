package com.parcialModelado.dao;

import java.util.List;

import com.parcialModelado.modelos.Usuarios;

import jakarta.transaction.Transactional;

@Transactional
public interface UsuariosDao {
	List <Usuarios> getUsuarios();
	void eliminar(Long id);
	void registrar(Usuarios usuario);
	boolean verificarCredenciales(Usuarios usuario);
}
