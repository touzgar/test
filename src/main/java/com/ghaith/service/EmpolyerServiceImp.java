package com.ghaith.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ghaith.entities.Empolyer;

import com.ghaith.repos.EmpolyerRepository;
@Service
public class EmpolyerServiceImp implements EmpolyerService{
	@Autowired
	EmpolyerRepository empolyerRepository;
	@Override
	public Empolyer saveEmp(Empolyer emp) {
	
		return empolyerRepository.save(emp) ;
	}
	
	@Override
	public void deleteEmp(Empolyer emp) {
		empolyerRepository.delete(emp);
		
	}

	

	@Override
	public Empolyer getEmp(Long id) {
		
		return empolyerRepository.findById(id).get();
	}

	@Override
	public List<Empolyer> getAllEmps() {
		
		return empolyerRepository.findAll();
	}

	@Override
	public void deleteEmpById(Long id) {
		empolyerRepository.deleteById(id);
	}

	@Override
	public List<Empolyer> searchEmpByName(String nameEmp) {
		
		 return empolyerRepository.findByNameEmp(nameEmp);
	}

	@Override
    public List<Empolyer> searchEmpByAvailabilityTime(Date startTime, Date endTime) {
        return empolyerRepository.findAvailableEmpolyers(startTime, endTime);
    }

	@Override
	public Empolyer UpdateEmp(Empolyer emp) {
		return empolyerRepository.save(emp);
	}

	

	



}
