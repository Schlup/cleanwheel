package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.dto.EmployeeListDTO;
import projeto.faculdade.cleanwheel.dto.EmployeeRegisterDTO;
import projeto.faculdade.cleanwheel.model.CarwashEmployees;
import projeto.faculdade.cleanwheel.service.EmployeeService;

import java.util.List;
import java.util.UUID;

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

    @DeleteMapping(path = "/delete/{employeeId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }

    @GetMapping(path = "/list/{businessUuid}")
    public ResponseEntity<List<EmployeeListDTO>> listEmployees(@PathVariable UUID businessUuid) {
        List<EmployeeListDTO> employees = employeeService.getAllEmployees(businessUuid);
        return ResponseEntity.ok(employees);
    }
}