package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.PersonReadDTO;
import projeto.faculdade.cleanwheel.dto.PersonUpdateDTO;
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

    @Autowired
    private TokenService tokenService;

    @PutMapping(path = "/update")
    public ResponseEntity<Person> updatePerson(@RequestBody PersonUpdateDTO personUpdateDTO, @RequestHeader("Authorization") String token) {
        UUID personUuid = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        Person updated = personService.updatePerson(personUuid, personUpdateDTO);
        return ResponseEntity.ok(updated);
    }

    @GetMapping(path = "/get/users")
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return ResponseEntity.ok(persons);
    }

    @GetMapping(path = "/profile")
    public ResponseEntity<PersonReadDTO> getPersonInfo(@RequestHeader("Authorization") String token) {
        UUID personUuid = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        PersonReadDTO personReadDTO = personService.getPersonProfile(personUuid);
        return ResponseEntity.ok(personReadDTO);
    }
}