package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
}
