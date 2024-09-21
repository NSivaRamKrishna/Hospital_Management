package com.springapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springapi.pojo.RegistrationPojo;
import com.springapi.service.RegistrationService;

@RestController
@CrossOrigin(origins="*")
public class RegistrationController {

	@Autowired
	RegistrationService service;
	
	@GetMapping("/getAllUsers")
	public List<Map<String,Object>> getAllData() {
		return service.getAllUsers();
	}
	
	@PostMapping("/register")
	public String insertPatientData(@RequestBody RegistrationPojo obj) {
		
		return service.insertUser(obj);
		
	}
}