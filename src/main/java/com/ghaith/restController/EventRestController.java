package com.ghaith.restController;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ghaith.entities.Event;
import com.ghaith.service.EventService;


@RestController
@RequestMapping("/api/event")
@CrossOrigin("*")

public class EventRestController {
	@Autowired
	EventService eventService;
	@RequestMapping(method=RequestMethod.GET)
	List<Event> getAllEvents(){
		return eventService.getAllEvents();
	}
	@RequestMapping(value = "/{id}",method=RequestMethod.GET)
	public Event getEventById(@PathVariable("id") Long id) {
		return eventService.getEvent(id);
	}
	@RequestMapping(method=RequestMethod.POST)
	public Event createEvent(@RequestBody Event event) {
		return eventService.saveEvent(event);
	}
	@RequestMapping( method = RequestMethod.PUT)
	public Event updateEvent(@RequestBody Event event) {
	    return eventService.UpdateEvent(event);
	}

	@RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
	public void deleteEvent(@PathVariable("id") Long id) {
		eventService.deleteEventById(id);
	}
	
	@RequestMapping(value = "/title/{title}", method = RequestMethod.GET)
	public Event getEventByTitle(@PathVariable("title") String title) {
	    return eventService.getEventByTitle(title);
	}
	// In your EventRestController
	@RequestMapping(value = "/historical", method = RequestMethod.GET)
	public List<Event> getHistoricalEvents() {
	    return eventService.getHistoricalEvents();
	}
	 

	

}
