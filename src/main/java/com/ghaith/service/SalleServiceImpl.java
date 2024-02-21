package com.ghaith.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ghaith.entities.Salle;
import com.ghaith.repos.SalleRepository;
@Service
public class SalleServiceImpl implements SalleService{
	@Autowired
	SalleRepository salleRepository;
	@Override
	public Salle saveSalle(Salle s) {
		
		return salleRepository.save(s);
	}

	@Override
	public Salle UpdateSalle(Salle s) {
		
		return salleRepository.save(s);
	}

	@Override
	public void deleteSalle(Salle s) {
		salleRepository.delete(s);
		
	}

	@Override
	public void deleteSalleById(Long id) {
		salleRepository.deleteById(id);
		
	}

	@Override
	public Salle getSalle(Long id) {
	
		return salleRepository.findById(id).get();
	}

	@Override
	public List<Salle> getAllSalles() {
		
		return salleRepository.findAll();
	}
	 @Override
	    public Salle getBySalleName(String salleName) {
	        return salleRepository.findBySalleName(salleName);
	    }
	 @Override
	    public List<Salle> findSalleByEmployeeCount(int numberOfEmployees) {
	        // Retrieve salles with a capacity greater than or equal to the given number of employees
	        return salleRepository.findAllByCapacityGreaterThanEqual(numberOfEmployees);
	    }
}
