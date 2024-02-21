package com.ghaith.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ghaith.entities.Event;
import com.ghaith.repos.EventRepository;

@Service
public class EventServiceImpl implements EventService{
	@Autowired
	EventRepository eventRepository;
	@Override
	public Event saveEvent(Event e) {
		
		return eventRepository.save(e);
	}

	@Override
	public Event UpdateEvent(Event e) {
		return eventRepository.save(e);
	}

	@Override
	public void deleteEvent(Event e) {
		eventRepository.delete(e);
		
	}

	@Override
	public void deleteEventById(Long id) {
		eventRepository.deleteById(id);
	}

	@Override
	public Event getEvent(Long id) {
		
		return eventRepository.findById(id).get();
	}

	@Override
	public List<Event> getAllEvents() {
		
		return eventRepository.findAll();
	}
	public Event getEventByTitle(String title) {
	    return eventRepository.findByTitle(title);
	}
	public List<Event> getHistoricalEvents() {
	    Date currentDate = new Date(); // Get the current date and time
	    return eventRepository.findByEndTimeBefore(currentDate);
	}
	

		
	}


