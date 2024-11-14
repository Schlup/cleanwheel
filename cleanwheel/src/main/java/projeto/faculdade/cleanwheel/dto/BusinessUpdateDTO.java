package projeto.faculdade.cleanwheel.dto;

public record BusinessUpdateDTO(String name,
                                String email,
                                String phone,
                                String streetName,
                                String complement,
                                String neighborhood,
                                String city,
                                String state,
                                String country,
                                String postalCode) {
}