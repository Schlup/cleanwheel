package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.BusinessRegisterDTO;
import projeto.faculdade.cleanwheel.model.Business;
import projeto.faculdade.cleanwheel.model.Person;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.repository.PersonRepository;

import java.util.UUID;

@Service
public class BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private PersonRepository personRepository;

    public Business createBusiness(UUID ownerUUID, BusinessRegisterDTO businessDTO) {
        Person owner = personRepository.findById(ownerUUID).orElseThrow(() -> new RuntimeException("Owner not found"));

        Business business = new Business();
        business.setUuid(UUID.randomUUID());
        business.setOwner(owner);
        business.setName(businessDTO.name());
        return businessRepository.save(business);
    }
}
