package com.mts.login.rest;

public class DatosPersona {

	public DatosPersona(String usuario,String passwors) {
       this.usuario =usuario;
       this.passwors = passwors;  
	}
	
	
	public DatosPersona(){
		
	}
	
	private  String usuario;
	private  String passwors;
	private  boolean status;
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getPasswors() {
		return passwors;
	}
	public void setPasswors(String passwors) {
		this.passwors = passwors;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}

}
