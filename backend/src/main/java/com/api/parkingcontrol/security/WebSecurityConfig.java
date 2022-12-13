package com.api.parkingcontrol.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("*");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.csrf().disable();
		http.authorizeHttpRequests()
		.antMatchers(HttpMethod.OPTIONS, "/parking-spot/**").permitAll()
		.antMatchers(HttpMethod.OPTIONS, "/login", "/login/**").permitAll()
		.antMatchers(HttpMethod.POST, "/login", "/login/**").permitAll()
		.antMatchers(HttpMethod.GET, "/login", "/login/**").permitAll()
		.and()
		.authorizeHttpRequests()
		.antMatchers(HttpMethod.POST, "/parking-spot/**").hasRole("ADMIN")// .antMatchers(HttpMethod.POST, "/parking-spot").hasRole("ADMIN")
		.antMatchers(HttpMethod.DELETE, "/parking-spot/**").hasRole("ADMIN")
		.antMatchers(HttpMethod.PUT, "/parking-spot/**").hasRole("ADMIN").and()
		.httpBasic().and()				
		.headers().frameOptions().disable();
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
