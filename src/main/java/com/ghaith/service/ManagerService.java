package com.ghaith.service;

import java.util.List;

import com.ghaith.entities.Manager;



public interface ManagerService {
	Manager saveManager(Manager manager);
	Manager UpdateManager(Manager manager);
	void deleteManager(Manager manager);
	void deleteManagerById(Long id);
	Manager getManager(Long id);
	List<Manager> getAllManagers();
	List<Manager> searchManagerByName(String nameManager);

}
