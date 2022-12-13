package com.api.parkingcontrol.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.parkingcontrol.security.UserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/login")
public class LoginController {
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	@Autowired
	private PasswordEncoder encoder;
	
	@PostMapping
	public Boolean getUser(@RequestParam String login, @RequestParam String password) {
		UserDetails usuario = userDetailsServiceImpl.loadUserByUsername(login);
	
		boolean valid = false;
		
		valid = encoder.matches(password, usuario.getPassword());
		
		if(valid) return true;

		return false;
	}


}
