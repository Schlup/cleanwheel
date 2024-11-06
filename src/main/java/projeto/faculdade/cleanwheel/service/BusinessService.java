package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.BusinessPageDTO;
import projeto.faculdade.cleanwheel.dto.BusinessRegisterDTO;
import projeto.faculdade.cleanwheel.dto.GetBusinessDTO;
import projeto.faculdade.cleanwheel.model.*;
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

    public Page<GetBusinessDTO> listAllBusinesses(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Business> businesses = businessRepository.findAll(pageable);

        return businesses.map(business -> {
            BusinessContact contact = business.getContact(); // Acessa o contato
            BusinessAddress address = business.getAddress(); // Acessa o endereço

            return new GetBusinessDTO(
                    business.getUuid(),
                    business.getName(),
                    contact.getPhone(),
                    address.getStreetName(),
                    address.getNeighborhood(),
                    address.getCity()
            );
        });
    }

    public BusinessPageDTO getBusinessByUuid(UUID uuid) {
        Business business = businessRepository.findById(uuid)
                .orElseThrow(() -> new RuntimeException("Business not found"));

        BusinessContact contact = business.getContact();
        BusinessAddress address = business.getAddress();

        return new BusinessPageDTO(
                business.getUuid(),
                business.getName(),
                contact.getEmail(),
                contact.getPhone(),
                address.getStreetName(),
                address.getComplement(),
                address.getNeighborhood(),
                address.getCity(),
                address.getState(),
                address.getCountry(),
                address.getPostalCode()
        );
    }


}