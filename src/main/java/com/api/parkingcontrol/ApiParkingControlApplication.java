package com.api.parkingcontrol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.parkingcontrol.models.UserModel;
import com.api.parkingcontrol.repositories.UserRepository;

@SpringBootApplication
@RestController
public class ApiParkingControlApplication implements CommandLineRunner{
	
	@Autowired
	public UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiParkingControlApplication.class, args);
	}
	
	@GetMapping("/")
	public String index() {
		return "Hello World!";
	}

	@Override
	public void run(String... args) throws Exception {
		UserModel user = new UserModel();
		user.setUserName("admin");
		user.setPassword(new BCryptPasswordEncoder().encode("123"));
		userRepository.save(user);		
	}
}
