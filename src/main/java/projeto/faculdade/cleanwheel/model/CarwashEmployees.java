package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "carwash_employees")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarwashEmployees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key artificial

    @ManyToOne
    @JoinColumn(name = "business_uuid", nullable = false)
    private Business business;

    @ManyToOne
    @JoinColumn(name = "person_uuid", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private CarwashRoles role;
}