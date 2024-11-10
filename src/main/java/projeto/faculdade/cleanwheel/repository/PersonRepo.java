package projeto.faculdade.cleanwheel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.faculdade.cleanwheel.model.Person;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PersonRepo extends JpaRepository<Person, UUID> {
    //Eu sei q é errado criar 2 repo mas n achei outra solução sem enlouquecer
    Optional<Person> findByEmail(String email);
}