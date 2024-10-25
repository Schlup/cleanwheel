package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Entity
@Table(name = "working_hours")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class    WorkingHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relacionamento com a tabela Business (Muitas horas de trabalho para um negócio)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_uuid", nullable = false)
    private Business business;

    // Relacionamento com a tabela DayOfWeek (um dia da semana)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_of_week_id", nullable = false)
    private DayOfWeek dayOfWeek;

    // Hora de abertura
    @Column(name = "opening_time", nullable = false)
    private LocalTime openingTime;

    // Hora de fechamento
    @Column(name = "closing_time", nullable = false)
    private LocalTime closingTime;
}