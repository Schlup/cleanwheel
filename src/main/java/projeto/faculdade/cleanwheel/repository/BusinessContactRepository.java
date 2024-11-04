package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.faculdade.cleanwheel.model.BusinessContact;
import java.util.UUID;

public interface BusinessContactRepository extends JpaRepository<BusinessContact, UUID> {
}