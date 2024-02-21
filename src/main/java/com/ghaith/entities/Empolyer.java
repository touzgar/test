package com.ghaith.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Empolyer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEmp;
	private String nameEmp;
	private String email;
	private Date availbility_start_time;
	private Date availbility_end_time;
	
	 @OneToMany(mappedBy = "empolyer")
	    private List<Event> event;
	
	
	public Empolyer() {
		super();
		
	}
	public Long getIdEmp() {
		return idEmp;
	}
	public void setIdEmp(Long idEmp) {
		this.idEmp = idEmp;
	}
	public String getNameEmp() {
		return nameEmp;
	}
	public void setNameEmp(String nameEmp) {
		this.nameEmp = nameEmp;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getAvailbility_start_time() {
		return availbility_start_time;
	}
	public void setAvailbility_start_time(Date availbility_start_time) {
		this.availbility_start_time = availbility_start_time;
	}
	public Date getAvailbility_end_time() {
		return availbility_end_time;
	}
	public void setAvailbility_end_time(Date availbility_end_time) {
		this.availbility_end_time = availbility_end_time;
	}
	
	
}
