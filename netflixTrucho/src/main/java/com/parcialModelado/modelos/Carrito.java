package com.parcialModelado.modelos;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "carrito")
public class Carrito {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_carrito")
	private Long id_carrito;
	@Column(name="fecha")
	private Date fecha;
	@Column(name="tiempo")
	private int tiempo;
	@Column(name="total")
	private int total;
	@Column(name="estado")
	private String estado;
	@Column(name="sancion")
	private int sancion;
	@Column(name="email")
	private String email;
	@Column(name="nombre")
	private String nombre;
	@Column(name="img")
	private String img;
	
	public Carrito( Date fecha, int tiempo, int total,String estado, String email, String nombre, String img) {
		this.fecha= fecha;
		this.tiempo = tiempo;
		this.total = total;
		this.estado = estado;
		this.email = email;
		this.nombre = nombre;
		this.img = img;
	}
		
	public Carrito(Long id_carrito, int total, String estado, int sancion) {
		this.id_carrito = id_carrito;
		this.total = total;
		this.estado = estado;
		this.sancion = sancion;
	}

	public Carrito() {}

	public Long getId_carrito() {
		return id_carrito;
	}
	public void setId_carrito( Long id_carrito) {
		this.id_carrito = id_carrito;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha( Date fecha ) {
		this.fecha = fecha;
	}
	public int getTiempo() {
		return tiempo;
	}
	public void setTiempo( int tiempo ) {
		this.tiempo = tiempo;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal( int total ) {
		this.total = total;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public int getSancion() {
		return sancion;
	}

	public void setSancion(int sancion) {
		this.sancion = sancion;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	

}
