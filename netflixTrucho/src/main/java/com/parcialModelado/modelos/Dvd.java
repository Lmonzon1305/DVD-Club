package com.parcialModelado.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dvd")
public class Dvd {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_dvd")
	private Long id_dvd;
	@Column(name="nombre")
	private String nombre;
	@Column(name="descripcion")
	private String descripcion;
	@Column(name="categoria")
	private String categoria;
	@Column(name="img")
	private String img;
	
	
	public Dvd(String nom, String desc, String cat, String im) {
		this.nombre=nom;
		this.descripcion=desc;
		this.categoria=cat;
		this.img=im;
		
	}
	
	public Dvd() {}

	public Long getId_dvd() {
		return id_dvd;
	}
	public void setId_dvd(Long id_dvd) {
		this.id_dvd = id_dvd;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
		
}
