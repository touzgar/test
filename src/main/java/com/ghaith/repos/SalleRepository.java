package com.ghaith.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ghaith.entities.Salle;

public interface SalleRepository extends JpaRepository<Salle, Long> {
	Salle findBySalleName(String salleName);

	List<Salle> findAllByCapacityGreaterThanEqual(int numberOfEmployees);

}
