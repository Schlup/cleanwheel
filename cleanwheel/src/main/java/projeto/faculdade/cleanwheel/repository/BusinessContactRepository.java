package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.BusinessContact;
import java.util.UUID;

@Repository
public interface BusinessContactRepository extends JpaRepository<BusinessContact, UUID> {
}