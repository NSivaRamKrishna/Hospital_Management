package com.springapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springapi.pojo.AppointmentPojo;
import com.springapi.service.AppointmentService;

@RestController
public class AppoinmentController {
	
	@Autowired
	AppointmentService as;
	
	@PostMapping("/addAppointment")
	public String addAppoinments(@RequestBody AppointmentPojo ap) {
		
		return as.addAppoinment(ap);
	}

	
	@GetMapping("/getAppointmentsById")
	public List getAppointmentsById(@RequestParam String appointmentId) {
		return as.getPreviousAppoinments(appointmentId);
	}


	@GetMapping("/getAllAppointments")
	public List getAllAppointments() {
		return as.getAllAppointments();
	}
}
