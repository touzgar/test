package com.ghaith.service;

import java.util.List;

import com.ghaith.entities.Event;


public interface EventService {
	Event saveEvent(Event e);
	Event UpdateEvent(Event e);
	void deleteEvent(Event e);
	void deleteEventById(Long id);
	Event getEvent(Long id);
	List<Event> getAllEvents();
	Event getEventByTitle(String title);
	List<Event> getHistoricalEvents();
	
}
