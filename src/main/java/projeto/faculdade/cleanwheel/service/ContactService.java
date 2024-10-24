package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.model.Contact;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.ContactRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

import java.util.UUID;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private PersonRepository personRepository;

    public Contact createContact(UUID personUuid, String phone) {
        Person person = personRepository.findById(personUuid).orElseThrow(() -> new RuntimeException("Person not found"));

        Contact contact = new Contact();
        contact.setPerson(person);
        contact.setPhone(phone);

        return contactRepository.save(contact);
    }
}