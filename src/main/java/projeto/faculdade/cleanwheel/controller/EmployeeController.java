package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.faculdade.cleanwheel.dto.EmployeeRegisterDTO;
import projeto.faculdade.cleanwheel.model.CarwashEmployees;
import projeto.faculdade.cleanwheel.service.EmployeeService;

@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping(path = "/create")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeRegisterDTO employeeRegisterDTO) {
        CarwashEmployees createdEmployee = employeeService.createEmployee(employeeRegisterDTO);
        return ResponseEntity.ok(createdEmployee);
    }
}