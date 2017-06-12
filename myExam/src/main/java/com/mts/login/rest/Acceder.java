package com.mts.login.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/datos")
public class Acceder {

	@POST
	@Path("/persona")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public DatosPersonas getDatosP(DatosPersona dp){
		DatosPersonas datosPersona= new DatosPersonas();
		if(dp.getUsuario().equals("beto")){
		
		datosPersona.setNombre("Roberto Antonio");
		datosPersona.setApePat("Aguilar");
		datosPersona.setApeMat("vazquez");
		datosPersona.setEdad(23);
		datosPersona.setSexo("H");
		
		datosPersona.setStatus(true);
		}
		else{
			datosPersona.setStatus(false);
		}
		
		return datosPersona;
	}
	@GET
	@Path("/nombre")
	@Produces(MediaType.TEXT_PLAIN)
	public String nombre(){
		return "Roberto Antonio";
	}
}
