package projeto.faculdade.cleanwheel.dto;


import java.util.UUID;

public record GetBusinessDTO(UUID UUID,
                             String businessName,
                             String businessPhone,
                             String streetName,
                             String neighborhood,
                             String city) { }