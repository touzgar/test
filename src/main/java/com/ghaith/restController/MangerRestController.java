package com.ghaith.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ghaith.entities.EmailRequest;
import com.ghaith.entities.Event;
import com.ghaith.entities.Manager;
import com.ghaith.service.EmailService;
import com.ghaith.service.EventService;
import com.ghaith.service.ManagerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/manager")

public class MangerRestController {
@Autowired
ManagerService managerService;
@Autowired
EmailService emailService;
@Autowired
EventService eventService;
@RequestMapping(method=RequestMethod.GET)
public List<Manager> getAllManagers(){
	return managerService.getAllManagers();
}
@RequestMapping(method=RequestMethod.POST)
public Manager createManager(@RequestBody Manager manager ) {
	return managerService.saveManager(manager);
}
@RequestMapping(method = RequestMethod.PUT)
public Manager updateManager(@RequestBody Manager Manager) {
	return  managerService.UpdateManager(Manager);
}
@RequestMapping(value = "/{id}",method=RequestMethod.GET)
public Manager getManagerById(@PathVariable("id") Long id) {
	return managerService.getManager(id);
}


@RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
public void deleteManager(@PathVariable("id") Long id) {
	managerService.deleteManagerById(id);
}
@RequestMapping(value = "/find/{nameManager}",method=RequestMethod.GET)

public List<Manager> searchManagerByName(@PathVariable("nameManager") String nameManager){
	return managerService.searchManagerByName(nameManager);
}

@RequestMapping(value = "/send-email", method = RequestMethod.POST)
public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailRequest) {
    try {
        // Assuming you have a Manager entity with an email field
        Manager manager = managerService.getManager(emailRequest.getManagerId());

        // Assuming you have an Event entity with the necessary fields
        Event event = eventService.getEvent(emailRequest.getEventId());

        // Modify this as per your requirements
        List<String> toEmails = emailRequest.getToEmails();
        String subject = emailRequest.getSubject();

        for (String toEmail : toEmails) {
            // Include event information in the email body
            String body = "Event Information:\n" +
                    "ID: " + event.getId() +
                    "\nTitle: " + event.getTitle() +
                    "\nStart Time: " + event.getStartTime() +
                    "\nEnd Time: " + event.getEndTime() +
                    "\nLocation: " + event.getLocation() +
                    "\n\nSent by: " + manager.getNameManager();

            emailService.sendEmail(toEmail, subject, body);
        }

        return new ResponseEntity<>("Emails sent successfully", HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>("Failed to send emails: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
