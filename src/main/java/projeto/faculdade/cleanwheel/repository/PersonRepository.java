package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.Person;

import java.util.UUID;

@Repository
public interface PersonRepository extends JpaRepository<Person, UUID> {

    //Métodos de consulta podem ser adicionados aqui
    // Register, Login, Update

    Person findByEmail(String email);
}
