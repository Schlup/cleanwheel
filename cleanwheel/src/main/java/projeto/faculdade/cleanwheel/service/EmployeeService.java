package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.EmployeeListDTO;
import projeto.faculdade.cleanwheel.dto.EmployeeRegisterDTO;
import projeto.faculdade.cleanwheel.model.*;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.repository.CarwashRolesRepository;
import projeto.faculdade.cleanwheel.repository.EmployeeRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepo;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

        person.setRole(UserRole.EMPLOYEE);

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

    public void deleteEmployee(Long employeeId) {
        CarwashEmployees employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        Person person = employee.getPerson();
        person.setRole(UserRole.USER);
        personRepo.save(person);

        employeeRepository.delete(employee);
    }

    public List<EmployeeListDTO> getAllEmployees(UUID businessUuid) {
        // Recupera os empregados pelo UUID do business
        List<CarwashEmployees> employees = employeeRepository.findByBusiness_Uuid(businessUuid);

        // Converte para DTO
        return employees.stream()
                .map(employee -> new EmployeeListDTO(
                        employee.getId(),
                        employee.getPerson().getName(), // Supondo que Person tenha o campo "name"
                        employee.getRole().getRole()))   // Obtendo o nome da Role
                .collect(Collectors.toList());
    }
}
