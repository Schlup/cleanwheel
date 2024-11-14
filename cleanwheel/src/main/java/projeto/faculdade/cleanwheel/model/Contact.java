package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "contact")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contact {

    @Id
    private UUID personUuid;

    @OneToOne
    @MapsId
    @JoinColumn(name = "person_uuid")
    private Person person;

    @Column(name = "phone", nullable = false, length = 20)
    private String phone;
}
