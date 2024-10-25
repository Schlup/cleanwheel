package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "appointment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue
    private UUID uuid;

    @ManyToOne
    @JoinColumn(name = "business_uuid", nullable = false)
    private Business business;

    @ManyToOne
    @JoinColumn(name = "person_uuid", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    private AppointmentStatus status;

    @Temporal(TemporalType.DATE)
    private Date date;

    @Temporal(TemporalType.TIME)
    private Date time;
}