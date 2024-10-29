package projeto.faculdade.cleanwheel.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.AuthenticationDTO;
import projeto.faculdade.cleanwheel.dto.LoginResponseDTO;
import projeto.faculdade.cleanwheel.dto.RegisterDTO;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Person) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) {

        //Verifica se existe email igual
        if (this.personRepository.findByEmail(data.email()) != null) {
            throw new IllegalArgumentException("Email already in use");
        }

        // Reverifica se as senhas informadas são iguais
        if (!data.password().equals(data.repeatPassword()))  {
            throw new IllegalArgumentException("Password do not match");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Person newPerson = new Person(data.name(), data.lastname(), data.email(), encryptedPassword, data.role());

        this.personRepository.save(newPerson);
        return ResponseEntity.ok().build();
    }

}