package com.api.parkingcontrol.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		  .allowedOrigins("*")
          .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
          .allowedHeaders("*", "Access-Control-Allow-Headers", "origin", "Content-type", "accept", "x-requested-with", "x-requested-by") //What is this for?
          .allowCredentials(true);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic()
		.and().headers().frameOptions().sameOrigin().and().authorizeHttpRequests()
				.antMatchers(HttpMethod.OPTIONS, "/parking-spot/**").permitAll()
				.antMatchers(HttpMethod.GET, "/parking-spot/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.POST, "/parking-spot/**").hasRole("ADMIN")
				// .antMatchers(HttpMethod.POST, "/parking-spot").hasRole("ADMIN")
				.antMatchers(HttpMethod.DELETE, "/parking-spot/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.PUT, "/parking-spot/**").hasRole("USER").anyRequest().authenticated().and()
				.csrf().disable();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
