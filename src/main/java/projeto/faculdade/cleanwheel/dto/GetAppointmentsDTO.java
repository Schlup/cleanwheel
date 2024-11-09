package projeto.faculdade.cleanwheel.dto;

import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

public record GetAppointmentsDTO(UUID appointment,
                                 UUID business,
                                 UUID person,
                                 Long status,
                                 Long service,
                                 Date date,
                                 Time time) {
}
