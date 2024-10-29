package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.faculdade.cleanwheel.model.Business;

import java.util.UUID;

public interface BusinessRepository extends JpaRepository<Business, UUID> {
    // Aqui você pode adicionar métodos de consulta personalizados, se necessário
}