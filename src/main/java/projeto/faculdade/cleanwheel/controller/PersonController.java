package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.service.PersonService;

import java.util.UUID;

@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @PutMapping(path = "/update/{uuid}")
    public ResponseEntity<Person> updatePerson(@PathVariable UUID uuid, @RequestBody Person updatedPerson) {
        Person updated = personService.updatePerson(uuid, updatedPerson);
        return ResponseEntity.ok(updated);
    }
}
