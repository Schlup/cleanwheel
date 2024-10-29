package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.PersonRepository;
import projeto.faculdade.cleanwheel.service.PersonService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @Autowired
    private PersonRepository personRepository;

    // REFAZER ESSA BOMBA, TA SALVANDO A SENHA NO BD SEM CRIPTORAFAR (CRIAR DTO), ou dxa pra outra hora mt trampo isso
    @PutMapping(path = "/update/{uuid}")
    public ResponseEntity<Person> updatePerson(@PathVariable UUID uuid, @RequestBody Person updatedPerson) {
        Person updated = personService.updatePerson(uuid, updatedPerson);
        return ResponseEntity.ok(updated);
    }

    @GetMapping(path = "/get/users")
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return ResponseEntity.ok(persons);
    }
}
