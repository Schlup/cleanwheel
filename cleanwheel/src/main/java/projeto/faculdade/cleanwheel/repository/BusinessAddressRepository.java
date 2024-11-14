package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.BusinessAddress;
import java.util.UUID;

@Repository
public interface BusinessAddressRepository extends JpaRepository<BusinessAddress, UUID> {
}