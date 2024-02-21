package com.ghaith.service;

import java.util.Date;
import java.util.List;

import com.ghaith.entities.Empolyer;



public interface EmpolyerService {
Empolyer saveEmp(Empolyer emp);
Empolyer UpdateEmp(Empolyer emp);
void deleteEmp(Empolyer emp);
void deleteEmpById(Long id);
Empolyer getEmp(Long id);
List<Empolyer> getAllEmps();
List<Empolyer> searchEmpByName(String nameEmp);
List<Empolyer> searchEmpByAvailabilityTime(Date startTime, Date endTime);
}
