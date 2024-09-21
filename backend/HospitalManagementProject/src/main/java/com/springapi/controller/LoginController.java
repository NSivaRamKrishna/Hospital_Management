package com.springapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springapi.pojo.LoginPojo;
import com.springapi.service.LoginService;


@RestController
public class LoginController {
	@Autowired
	LoginService ls;
	
	@PostMapping("/login")
    public String verifyCredentials(@RequestBody LoginPojo lp) {	
		return ls.verifyCredentials(lp); 
	}
}