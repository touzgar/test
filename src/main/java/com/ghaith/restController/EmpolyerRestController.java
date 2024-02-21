package com.ghaith.restController;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.ghaith.entities.Empolyer;

import com.ghaith.service.EmpolyerService;

@RestController
@CrossOrigin
@RequestMapping("/api/empolyer")
public class EmpolyerRestController {
	@Autowired
	EmpolyerService empolyerService;
	@RequestMapping(method=RequestMethod.GET)
	public List<Empolyer> getAllEmpolyers(){
		return empolyerService.getAllEmps();
	}
	@RequestMapping(value = "/{id}",method=RequestMethod.GET)
	public Empolyer getEmpolyerById(@PathVariable("id") Long id) {
		return empolyerService.getEmp(id);
	}
	@RequestMapping(method=RequestMethod.POST)
	public Empolyer createEmpolyer(@RequestBody Empolyer empolyer ) {
		return empolyerService.saveEmp(empolyer);
	}
	@RequestMapping(method = RequestMethod.PUT)
	public Empolyer updateEmpolyer(@RequestBody Empolyer empolyer) {
		return empolyerService.UpdateEmp(empolyer);
	}

	@RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
	public void deleteEmpolyer(@PathVariable("id") Long id) {
		empolyerService.deleteEmpById(id);
	}
	@RequestMapping(value = "/find/{nameEmp}",method=RequestMethod.GET)
	
	public List<Empolyer> searchEmpByName(@PathVariable("nameEmp") String nameEmp){
		return empolyerService.searchEmpByName(nameEmp);
	}
	@RequestMapping(value = "/searchByAvailabilityTime", method = RequestMethod.GET)
	public List<Empolyer> searchEmpByAvailabilityTime(@RequestParam("startTime") @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date startTime,
	        @RequestParam("endTime") @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date endTime) {
	    return empolyerService.searchEmpByAvailabilityTime(startTime, endTime);
	}

	

}
