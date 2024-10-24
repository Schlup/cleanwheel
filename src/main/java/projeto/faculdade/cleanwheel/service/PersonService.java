package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    public Optional<Person> getPersonById(UUID uuid) {
        return personRepository.findById(uuid);
    }

    public Person getPersonByEmail(String email) {
        return personRepository.findByEmail(email);
    }
}
