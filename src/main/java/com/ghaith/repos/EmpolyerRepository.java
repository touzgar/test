package com.ghaith.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ghaith.entities.Empolyer;


public interface EmpolyerRepository extends JpaRepository<Empolyer, Long> {
	 List<Empolyer> findByNameEmp(String nameEmp);
	 @Query("SELECT e FROM Empolyer e WHERE e.availbility_start_time "
	 		+ "<= :endTime AND e.availbility_end_time >= :startTime")
	    List<Empolyer> findAvailableEmpolyers(@Param("startTime") Date startTime,
	    		@Param("endTime") Date endTime);
}
