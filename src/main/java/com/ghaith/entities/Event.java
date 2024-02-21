package com.ghaith.entities;



import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private  Long idEvent ;
	private String title; 
	private Date startTime;
	private Date endTime;
	private String location;
	
	  @ManyToOne
	  @JsonIgnore
	    private Salle salle;
	  @ManyToOne
	    private Empolyer empolyer;
	  
	public Event() {
		super();
		
	}
	
	public Event(String title, Date startTime, Date endTime, String location) {
		super();
		this.title = title;
		this.startTime = startTime;
		this.endTime = endTime;
		this.location = location;
	}

	public Long getId() {
		return idEvent;
	}
	public void setId(Long idEvent) {
		this.idEvent = idEvent;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Event [id=" + idEvent + ", title=" + title + ", startTime=" + startTime + ", endTime=" + endTime
				+ ", location=" + location + "]";
	}
	

}

