package projeto.faculdade.cleanwheel.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.AuthenticationDTO;
import projeto.faculdade.cleanwheel.dto.LoginResponseDTO;
import projeto.faculdade.cleanwheel.dto.RegisterDTO;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.model.UserRole;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private TokenService tokenService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());

        System.out.println(usernamePassword);
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Person) auth.getPrincipal());
        System.out.println(token);

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO data) {

        //Verifica se existe email igual
        if (this.personRepository.findByEmail(data.email()) != null) {
            throw new IllegalArgumentException("Email already in use");
        }

        // Reverifica se as senhas informadas são iguais
        if (!data.password().equals(data.repeatPassword())) {
            throw new IllegalArgumentException("Password do not match");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Person newPerson = new Person(data.name(), data.lastname(), data.email(), encryptedPassword, UserRole.USER);

        this.personRepository.save(newPerson);
        return ResponseEntity.ok().build();
    }
}