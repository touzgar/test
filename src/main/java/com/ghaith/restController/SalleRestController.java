package com.ghaith.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.ghaith.entities.Salle;
import com.ghaith.service.SalleService;

@RestController
@RequestMapping("/api/salle")
@CrossOrigin
public class SalleRestController {
	@Autowired
	SalleService salleService;
	@RequestMapping(method=RequestMethod.GET)
	List<Salle> getAllSalle(){
		return salleService.getAllSalles();
	}
	@RequestMapping(value = "/{id}",method=RequestMethod.GET)
	public Salle getSalleById(@PathVariable("id") Long id) {
		return salleService.getSalle(id);
	}
	@RequestMapping(method=RequestMethod.POST)
	public Salle createSalle(@RequestBody Salle salle) {
		return salleService.saveSalle(salle);
	}
	@RequestMapping(method = RequestMethod.PUT)
	public Salle updateSalle(@RequestBody Salle salle) {
	    return salleService.UpdateSalle(salle);
	}

	@RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
	public void deleteSalle(@PathVariable("id") Long id) {
		salleService.deleteSalleById(id);
	}
	@RequestMapping(value = "/search/{salleName}", method = RequestMethod.GET)
		public Salle searchSalleBySalleName(@PathVariable("salleName") String salleName) {
		    return salleService.getBySalleName(salleName);
		}
	@RequestMapping(value = "/findByEmployeeCount/{numberOfEmployees}", method = RequestMethod.GET)
    public List<Salle> findSalleByEmployeeCount(
            @PathVariable("numberOfEmployees") int numberOfEmployees) {
        return salleService.findSalleByEmployeeCount(numberOfEmployees);
    }
}
