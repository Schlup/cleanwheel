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
@Table(name = "service")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Autoincrement para o campo 'id'
    private Long id;

    private String service; // Nome do serviço, ex: "Lavagem Completa"

    private String serviceDescription; // Descrição do serviço, ex: "Lavagem com produtos biodegradáveis"
}
