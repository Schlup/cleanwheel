package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.EmployeeRegisterDTO;
import projeto.faculdade.cleanwheel.model.Business;
import projeto.faculdade.cleanwheel.model.CarwashEmployees;
import projeto.faculdade.cleanwheel.model.CarwashRoles;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.repository.CarwashRolesRepository;
import projeto.faculdade.cleanwheel.repository.EmployeeRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepo;

@Service
public class EmployeeService {

    @Autowired
    private PersonRepo personRepo;

    @Autowired
    private BusinessRepository businessRepo;

    @Autowired
    private CarwashRolesRepository rolesRepo;

    @Autowired
    private EmployeeRepository employeeRepository;

    public CarwashEmployees createEmployee(EmployeeRegisterDTO employeeRegisterDTO) {
        // Buscar Person pelo email
        Person person = personRepo.findByEmail(employeeRegisterDTO.employeeEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Buscar Business pelo UUID
        Business business = businessRepo.findById(employeeRegisterDTO.business())
                .orElseThrow(() -> new RuntimeException("Business not found"));

        // Buscar Role pelo ID
        CarwashRoles role = rolesRepo.findById(employeeRegisterDTO.employeeRole())
                .orElseThrow(() -> new RuntimeException("Role not found"));

        // Criar e salvar Employee
        CarwashEmployees employee = new CarwashEmployees(null, business, person, role);
        return employeeRepository.save(employee);
    }
}
