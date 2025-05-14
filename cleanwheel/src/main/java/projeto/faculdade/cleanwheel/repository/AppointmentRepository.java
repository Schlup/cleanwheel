package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.Appointment;
import java.util.UUID;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, UUID> {
    Page<Appointment> findByBusinessUuid(UUID businessUuid, Pageable pageable);
    Page<Appointment> findByPersonUuid(UUID personUuid, Pageable pageable);
}