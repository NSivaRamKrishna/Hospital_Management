package com.springapi.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.springapi.pojo.RegistrationPojo;

@Service
public class RegistrationService {

	@Autowired
	JdbcTemplate jdbc;
	
	public String insertUser(RegistrationPojo obj) {
		String firstName = obj.getFirstName();
		String lastName = obj.getLastName();
		String password = obj.getPassword();
		String gender = obj.getGender();
		String area = obj.getArea();
		String email = obj.getEmail();
		String phoneNo = obj.getPhoneNo();
		String role=obj.getRole();
		int age = obj.getAge();
		int rows = 0;
		String query = "insert into registration values(?,?,?,?,?,?,?,?,?)";
		List previous = this.getPersonByMail(email);
		if(previous.isEmpty()) {
			rows = jdbc.update(query, firstName, lastName, email,phoneNo, age, gender,  area,  password, role);
		}
		else {
			rows = 0;
		}
		if(rows>0) {
			return "inserted";
		}
		else {
			return "not inserted";
		}
	}
	
	public List<Map<String,Object>> getAllUsers() {
		String query = "select * from registration;";
		return jdbc.queryForList(query);
	}
	
	public List<Map<String,Object>> getPersonByMail(String mail) {
		String query = "select * from registration where email=?";
		return jdbc.queryForList(query, mail);
	}
	
	
}