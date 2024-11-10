package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.CarwashEmployees;

import java.util.List;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<CarwashEmployees, Long> {
    List<CarwashEmployees> findByBusiness_Uuid(UUID businessUuid);
}