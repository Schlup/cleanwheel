package projeto.faculdade.cleanwheel.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonRegistrationDTO {
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String repeatPassword;
}
