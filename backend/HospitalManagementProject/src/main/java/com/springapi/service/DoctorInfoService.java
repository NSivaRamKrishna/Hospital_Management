package com.springapi.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.springapi.pojo.DoctorInfoPojo;

@Service
public class DoctorInfoService {

	@Autowired
	JdbcTemplate jdbc;
	public List getAllDoctors() {
		String sql="select * from doctor";
		return jdbc.queryForList(sql);
	}
	public List getDoctorsById(String slNo) {
		String sql="select * from doctor where slNo=?";
		return jdbc.queryForList(sql,slNo);
	}
	
	public List getDoctorsByArea(DoctorInfoPojo obj) {
		return jdbc.queryForList("select * from doctor where area=?", obj.getArea());
	}
	
	public List getDoctorsBySpecialization(DoctorInfoPojo obj) {
		return jdbc.queryForList("select * from doctor where specialization=?", obj.getSpecialization());
	}
	
	public List getDoctorsByAreaAndSpecialization(DoctorInfoPojo obj) {
		return jdbc.queryForList("select * from doctor where specialization=? and area=?", obj.getSpecialization(), obj.getArea());
	}
	
	//pagination
	
	public List offset(int pagenumber,int pagesize) {
		String sql="select * from doctor LIMIT ? OFFSET ?";
		return jdbc.queryForList(sql,pagesize,pagesize*pagenumber);
	}
	
	public int insertDoctorInfo(DoctorInfoPojo lp) {
		int sno=lp.getSlNo();
		String name=lp.getName();
		String specialization=lp.getSpecialization();
		String area=lp.getArea();
		String date=lp.getDate();
		String slot=lp.getSlot();
		String sql="insert into doctor values(?,?,?,?,?,?)";
		int s=jdbc.update(sql,sno,name,specialization,area,date,slot);
		return s;
		}
}
