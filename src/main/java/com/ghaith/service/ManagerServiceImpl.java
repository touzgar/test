package com.ghaith.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ghaith.entities.Manager;
import com.ghaith.repos.ManagerRepository;
@Service
public class ManagerServiceImpl implements ManagerService {
@Autowired
ManagerRepository managerRepository; 
	@Override
	public Manager saveManager(Manager manager) {
		return managerRepository.save(manager);
	}

	@Override
	public Manager UpdateManager(Manager manager) {
		return managerRepository.save(manager);
		}

	@Override
	public void deleteManager(Manager manager) {
		managerRepository.delete(manager);
		}

	@Override
	public void deleteManagerById(Long id) {
		managerRepository.deleteById(id);
		
	}

	@Override
	public Manager getManager(Long id) {
		
		return managerRepository.findById(id).get();
	}

	@Override
	public List<Manager> getAllManagers() {
		
		return managerRepository.findAll();
	}

	@Override
	public List<Manager> searchManagerByName(String nameManager) {
		
		return managerRepository.findByNameManager(nameManager);
	}

}
