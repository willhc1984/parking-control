package com.api.parkingcontrol.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.parkingcontrol.models.UserModel;
import com.api.parkingcontrol.security.UserDetailsServiceImpl;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private UserDetailsServiceImpl detailsServiceImpl;
	
	@GetMapping
	public UserDetails getUser(@RequestBody UserModel user) {
		return detailsServiceImpl.loadUserByUsername(user.getUsername());
	}
	

}
