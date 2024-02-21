package com.ghaith.service;

import java.util.List;

import com.ghaith.entities.Salle;

public interface SalleService {
	Salle saveSalle(Salle s);
	Salle UpdateSalle(Salle s);
	void deleteSalle(Salle s);
	void deleteSalleById(Long id);
	Salle getSalle(Long id);
	List<Salle> getAllSalles();
	Salle getBySalleName(String salleName);
	 List<Salle> findSalleByEmployeeCount(int numberOfEmployees);
}
