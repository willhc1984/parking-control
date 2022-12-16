package com.api.parkingcontrol.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.parkingcontrol.models.UserModel;
import com.api.parkingcontrol.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Transactional
	public UserModel save(UserModel userModel) {
		userModel.setPassword(new BCryptPasswordEncoder().encode(userModel.getPassword()));
		return userRepository.save(userModel);
	}
	
	public List<UserModel> getAllUsers() {
		return userRepository.findAll();
	}
	
	public Optional<UserModel> findById(UUID id) {
		return userRepository.findById(id);
	}
	
	@Transactional
	public void delete(UserModel userModel) {
		userRepository.delete(userModel);
	}

}
