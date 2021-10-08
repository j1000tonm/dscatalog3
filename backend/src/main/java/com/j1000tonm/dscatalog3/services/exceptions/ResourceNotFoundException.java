package com.j1000tonm.dscatalog3.services.exceptions;

public class ResourceNotFoundException extends RuntimeException	 {
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String msg) {
		super(msg);
	}

}
