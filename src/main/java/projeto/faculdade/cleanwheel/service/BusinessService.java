package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.BusinessRegisterDTO;
import projeto.faculdade.cleanwheel.model.Business;
import projeto.faculdade.cleanwheel.model.BusinessAddress;
import projeto.faculdade.cleanwheel.model.BusinessContact;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.model.UserRole;
import projeto.faculdade.cleanwheel.repository.BusinessAddressRepository;
import projeto.faculdade.cleanwheel.repository.BusinessContactRepository;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepository;
import java.util.UUID;

@Service
public class BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private BusinessAddressRepository businessAddressRepository;

    @Autowired
    private BusinessContactRepository businessContactRepository;

    public Business createBusiness(UUID ownerUUID, BusinessRegisterDTO businessDTO) {
        // Encontra o owner
        Person owner = personRepository.findById(ownerUUID).orElseThrow(() -> new RuntimeException("Owner not found"));

        // Alterar o role do usuário para OWNER
        owner.setRole(UserRole.OWNER);

        Business business = new Business();
        business.setOwner(owner);
        business.setName(businessDTO.name());
        businessRepository.save(business);

        BusinessContact businessContact = new BusinessContact();
        businessContact.setBusiness(business);
        businessContact.setEmail(businessDTO.email());
        businessContact.setPhone(businessDTO.phone());
        businessContactRepository.save(businessContact);

        BusinessAddress businessAddress = new BusinessAddress();
        businessAddress.setBusiness(business);
        businessAddress.setStreetName(businessDTO.streetName());
        businessAddress.setComplement(businessDTO.complement());
        businessAddress.setNeighborhood(businessDTO.neighborhood());
        businessAddress.setCity(businessDTO.city());
        businessAddress.setState(businessDTO.state());
        businessAddress.setCountry(businessDTO.country());
        businessAddress.setPostalCode(businessDTO.postalCode());
        businessAddressRepository.save(businessAddress);

        return business;
    }
}