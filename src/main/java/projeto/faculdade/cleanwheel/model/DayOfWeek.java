package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "day_of_week")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DayOfWeek {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Usando auto-incremento para 'id'
    private Long id;

    private String day; // Nome do dia, ex: "Segunda-feira"
}
