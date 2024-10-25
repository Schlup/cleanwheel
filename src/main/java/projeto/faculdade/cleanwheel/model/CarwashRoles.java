package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "carwash_roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarwashRoles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Mapeia o SERIAL do PostgreSQL
    private Long id;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "description")
    private String description;
}
