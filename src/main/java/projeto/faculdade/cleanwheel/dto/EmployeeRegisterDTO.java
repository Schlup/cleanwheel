package projeto.faculdade.cleanwheel.dto;

import java.util.UUID;

public record EmployeeRegisterDTO(String employeeEmail, UUID business, Long employeeRole) {
}