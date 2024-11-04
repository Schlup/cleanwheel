package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.faculdade.cleanwheel.model.BusinessAddress;
import java.util.UUID;

public interface BusinessAddressRepository extends JpaRepository<BusinessAddress, UUID> {
}