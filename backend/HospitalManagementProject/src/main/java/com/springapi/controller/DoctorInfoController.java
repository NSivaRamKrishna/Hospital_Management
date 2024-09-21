package com.springapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springapi.pojo.DoctorInfoPojo;
import com.springapi.service.DoctorInfoService;

@RestController
public class DoctorInfoController {

	@Autowired
	DoctorInfoService service;
	
	@GetMapping("/getAllDoc")
	public List getAllDoctors() {
		return service.getAllDoctors();
	} 
	
//	@GetMapping("/getDocById")
//	public List getDoctorsById(@RequestParam String slNo) {
//		return service.getAllDocById(slNo);
//	} 
//	
	@GetMapping("/getDocByArea")
	public List getDoctorsByArea(@RequestBody DoctorInfoPojo obj) {
		return service.getDoctorsByArea(obj);
	}
	
	@GetMapping("/getDocBySpec") 
	public List getDoctorsBySpecialization(@RequestBody DoctorInfoPojo obj) {
		return service.getDoctorsBySpecialization(obj);
	}
	
	@GetMapping("/getDocByAreaAndSpec")
	public List getDoctorsByAreaAndSpecialization(@RequestBody DoctorInfoPojo obj) {
		return service.getDoctorsByAreaAndSpecialization(obj);
	}
	
	@GetMapping("/getAllDocByPage")
	public List Fetch(@RequestParam int pageNumber,@RequestParam int pageSize) {
		return service.offset(pageNumber,pageSize);
	}
	
	@PostMapping("/setDocInfo")
	public String insertDoctorInfo(@RequestBody DoctorInfoPojo lp) {
		int s=service.insertDoctorInfo(lp);
		if(s>0) {
			return "data inserted";
		}else {
			return "data not inserted";
		}
	}
}
