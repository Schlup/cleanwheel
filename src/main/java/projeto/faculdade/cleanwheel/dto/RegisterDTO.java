package projeto.faculdade.cleanwheel.dto;

import projeto.faculdade.cleanwheel.model.UserRole;

public record RegisterDTO(String name, String lastname, String email, String password, String repeatPassword, UserRole role) { }