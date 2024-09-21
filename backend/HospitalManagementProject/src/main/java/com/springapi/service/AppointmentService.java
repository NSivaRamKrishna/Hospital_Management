package com.springapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.springapi.pojo.AppointmentPojo;

@Service
public class AppointmentService {
	@Autowired
	JdbcTemplate jt;
	public String addAppoinment(AppointmentPojo ap)
	{
		String appointmentId;
		String date=ap.getDate();
		String slot=ap.getSlot();
		String patientName=ap.getPatientName();
		String doctorName=ap.getDoctorName();
		String str="appid2023";
		appointmentId=str+doctorName.substring(0,2)+patientName.substring(0,2)+date.substring(0,2);

		List previous = this.checkAppointment(date,slot,patientName,doctorName);
		if(previous.isEmpty()) {
			String sql="insert into appointment values(?,?,?,?,?)";
			int i=jt.update(sql,appointmentId,date,slot,patientName,doctorName);
		
		if(i>0)
		{
			return appointmentId;
		}
		else
		{
			return "data not inserted";
		}
		}
		else {
			return "Already booked";
		}
	}
	
		public List checkAppointment(String date,String slot,String patientName,String doctorName) {

			String query = "select * from appointment where patientName=? and doctorName=? and date=? and slot=?";

			return jt.queryForList(query,patientName,doctorName,date,slot);

			}
		
//		String query="select firstName,lastName,age,gender,pPhoneNo from patientRegistration p join appointment a on p.email=a.pMail";
//		List details = jt.queryForList(query);

		 public List getPreviousAppoinments(String appointmentId) {
			 //String appointmentId=ap.getAppointmentId();
			 String sql="select * from appointment where date < CURDATE() and appointmentId=? ";
			 return jt.queryForList(sql,appointmentId);
		 }
		 
		 public List getAllAppointments() {
			 //String appointmentId=ap.getAppointmentId();
			 String sql="select * from appointment";
			 return jt.queryForList(sql);
		 }
   
}
