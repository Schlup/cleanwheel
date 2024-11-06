package projeto.faculdade.cleanwheel.dto;

import java.util.UUID;

public record BusinessPageDTO(UUID uuid,
                              String name,
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

// ADD Reviews/Photos in the future