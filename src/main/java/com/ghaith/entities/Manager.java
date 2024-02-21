package com.ghaith.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Manager {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idManager;
private String mailManager;
private String nameManager;




public Manager() {
	super();
}
public Long getIdManager() {
	return idManager;
}
public void setIdManager(Long idManager) {
	this.idManager = idManager;
}
public String getMailManager() {
	return mailManager;
}
public void setMailManager(String mailManager) {
	this.mailManager = mailManager;
}
public String getNameManager() {
	return nameManager;
}
public void setNameManager(String nameManager) {
	this.nameManager = nameManager;
}


}
