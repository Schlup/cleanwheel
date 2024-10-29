package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.BusinessRegisterDTO;
import projeto.faculdade.cleanwheel.model.Business;
import projeto.faculdade.cleanwheel.service.BusinessService;

import java.util.UUID;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private TokenService tokenService;

    @PostMapping(path = "/register")
    public ResponseEntity<?> createBusiness(@RequestBody BusinessRegisterDTO businessRegisterDTO, @RequestHeader("Authorization") String token) {
        UUID ownerUUID = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        Business createdBusiness = businessService.createBusiness(ownerUUID, businessRegisterDTO);
        return ResponseEntity.ok(createdBusiness);
    }
}