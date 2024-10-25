package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "person")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "lastname", length = 50)
    private String lastname;

    @Column(name = "email", nullable = false, length = 75, unique = true)
    private String email;

    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @Column(name = "cpf", unique = true)
    private String cpf;

    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL)
    private Contact contact;
}
