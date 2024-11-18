package projeto.faculdade.cleanwheel.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.PersonReadDTO;
import projeto.faculdade.cleanwheel.dto.PersonUpdateDTO;
import projeto.faculdade.cleanwheel.dto.RegisterDTO;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BusinessRepository businessRepository;

    // Register, Login, Update

    //Literalmente só salva o user no db
    public Person savePerson(RegisterDTO personDTO) {
        return null;
    }

    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    public Person updatePerson(UUID personUuid, PersonUpdateDTO personUpdateDTO) {
        return personRepository.findById(personUuid)
                .map(person -> {
                    person.setName(personUpdateDTO.name());
                    person.setLastname(personUpdateDTO.lastname());
                    person.setCpf(personUpdateDTO.cpf());
                    return personRepository.save(person);
                })
                .orElseThrow(() -> new RuntimeException("Person not found with UUID: " + personUuid));
    }

    public PersonReadDTO getPersonProfile(UUID personUuid) {
        Person person = personRepository.findById(personUuid)
                .orElseThrow(() -> new EntityNotFoundException("Person not found"));
        return new PersonReadDTO(
                person.getName(),
                person.getLastname(),
                person.getEmail(),
                person.getCpf(),
                person.getContact() != null ? person.getContact().getPhone() : null
        );
    }

    public Boolean ifIsOwner(UUID personUuid) {
        Person owner = new Person();
        owner.setUuid(personUuid);
        return businessRepository.existsByOwner(owner);
    }
}