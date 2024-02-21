package com.ghaith.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSalle;
    private String salleName;
    private int capacity;
   
    @OneToMany(mappedBy = "salle")
    private List<Event> events;
   public Salle() {
		super();
		
	}
	public Long getIdSalle() {
		return idSalle;
	}
	public void setIdSalle(Long idSalle) {
		this.idSalle = idSalle;
	}
	public String getSalleName() {
		return salleName;
	}
	public void setSalleName(String salleName) {
		this.salleName = salleName;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
   
}
