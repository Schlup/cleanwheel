package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.CarwashRoles;

@Repository
public interface CarwashRolesRepository extends JpaRepository<CarwashRoles, Long> {
}
