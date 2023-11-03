package com.parcialModelado.dao;

import java.util.List;

import com.parcialModelado.modelos.Dvd;

import jakarta.transaction.Transactional;

@Transactional
public interface DvdDao {
	List <Dvd> getDvd();
	void eliminarDvd(Long id);
}
