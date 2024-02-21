package com.ghaith.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ghaith.entities.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
	List<Manager> findByNameManager(String nameManager);
}
