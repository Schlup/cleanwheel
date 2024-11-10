package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.CarwashEmployees;

@Repository
public interface EmployeeRepository extends JpaRepository<CarwashEmployees, Long> {
}
