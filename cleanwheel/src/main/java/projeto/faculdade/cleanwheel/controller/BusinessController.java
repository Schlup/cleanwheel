package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.BusinessPageDTO;
import projeto.faculdade.cleanwheel.dto.BusinessRegisterDTO;
import projeto.faculdade.cleanwheel.dto.BusinessUpdateDTO;
import projeto.faculdade.cleanwheel.dto.GetBusinessDTO;
import projeto.faculdade.cleanwheel.model.Business;
import projeto.faculdade.cleanwheel.model.BusinessAddress;
import projeto.faculdade.cleanwheel.model.BusinessContact;
import projeto.faculdade.cleanwheel.repository.BusinessRepository;
import projeto.faculdade.cleanwheel.service.BusinessService;

import java.util.UUID;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private TokenService tokenService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/register")
    public ResponseEntity<?> createBusiness(@RequestBody BusinessRegisterDTO businessRegisterDTO, @RequestHeader("Authorization") String token) {
        UUID ownerUUID = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        Business createdBusiness = businessService.createBusiness(ownerUUID, businessRegisterDTO);
        return ResponseEntity.ok(createdBusiness);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/listAllBusiness")
    public ResponseEntity<Page<GetBusinessDTO>> listBusinesses(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {

        Page<GetBusinessDTO> dtoPage = businessService.listAllBusinesses(page, size);
        return ResponseEntity.ok(dtoPage);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/{uuid}")
    public ResponseEntity<BusinessPageDTO> getBusinessByUuid(@PathVariable UUID uuid) {
        BusinessPageDTO businessDTO = businessService.getBusinessByUuid(uuid);
        return ResponseEntity.ok(businessDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{uuid}")
    public ResponseEntity<?> updateBusiness(
            @PathVariable UUID uuid,
            @RequestBody BusinessUpdateDTO businessUpdateDTO,
            @RequestHeader("Authorization") String token) {

        UUID ownerUUID = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        businessService.updateBusiness(ownerUUID, uuid, businessUpdateDTO);
        return ResponseEntity.ok("Business updated successfully");
    }


}