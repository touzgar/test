package com.ghaith.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ghaith.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
	  Event findByTitle(String title);
	// In your EventRepository
	  List<Event> findByEndTimeBefore(Date currentDate);
	 
}
