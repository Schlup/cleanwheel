package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.RegisterDTO;
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
    public Person savePerson(RegisterDTO personDTO) {
    return null;
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
}