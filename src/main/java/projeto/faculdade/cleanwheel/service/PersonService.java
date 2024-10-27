package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.PersonRegistrationDTO;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register, Login, Update

    //Literalmente só salva o user no db
    public Person savePerson(PersonRegistrationDTO personDTO) {

        if (!personDTO.getPassword().equals(personDTO.getRepeatPassword())) {
            throw new IllegalArgumentException("Passwords do not match!");
        }

        personDTO.setPassword(passwordEncoder.encode(personDTO.getPassword()));

        Person person = new Person();
        person.setName(personDTO.getName());
        person.setLastname(personDTO.getLastname());
        person.setEmail(personDTO.getEmail());
        person.setPassword(passwordEncoder.encode(personDTO.getPassword()));

        return personRepository.save(person);
    }



    //Update das informações do usuário, telefone vai separado?
    public Person updatePerson(UUID uuid, Person updatedPerson) {
        return personRepository.findById(uuid)
                .map(person -> {
                    person.setName(updatedPerson.getName());
                    person.setLastname(updatedPerson.getLastname());
                    person.setEmail(updatedPerson.getEmail());
                    person.setPassword(updatedPerson.getPassword());
                    person.setCpf(updatedPerson.getCpf());
                    return personRepository.save(person);
                })
                .orElseThrow(() -> new RuntimeException("Person not found with UUID: " + uuid));
    }


    public Optional<Person> getPersonById(UUID uuid) {
        return personRepository.findById(uuid);
    }

    public Person getPersonByEmail(String email) {
        return personRepository.findByEmail(email);
    }
}
