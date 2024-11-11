package projeto.faculdade.cleanwheel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.faculdade.cleanwheel.config.TokenService;
import projeto.faculdade.cleanwheel.dto.AppointmentDTO;
import projeto.faculdade.cleanwheel.dto.AppointmentStatusUpdateDTO;
import projeto.faculdade.cleanwheel.dto.GetAppointmentsDTO;
import projeto.faculdade.cleanwheel.dto.GetBusinessDTO;
import projeto.faculdade.cleanwheel.model.Appointment;
import projeto.faculdade.cleanwheel.service.AppointmentService;

import java.util.UUID;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/create")
    public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentDTO appointmentDTO, @RequestHeader("Authorization") String token) {
        UUID personUuid = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        Appointment createdAppointment = appointmentService.createAppointment(personUuid, appointmentDTO);
        return ResponseEntity.ok(createdAppointment);
    }

    @GetMapping(path = "/listAllAppointments")
    public ResponseEntity<Page<GetAppointmentsDTO>> listBusinesses(
            @RequestParam UUID businessUuid,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {

        Page<GetAppointmentsDTO> dtoPage = appointmentService.listAllAppointments(businessUuid, page, size);
        return ResponseEntity.ok(dtoPage);
    }

    @PutMapping("/{appointmentId}/status")
    public ResponseEntity<Appointment> updateAppointmentStatus(
            @PathVariable UUID appointmentId,
            @RequestBody AppointmentStatusUpdateDTO statusUpdateDTO,
            @RequestHeader("Authorization") String token) {

        UUID employeeUuid = tokenService.getUUIDFromToken(token.replace("Bearer ", ""));
        Appointment updatedAppointment = appointmentService.updateAppointmentStatus(appointmentId, statusUpdateDTO, employeeUuid);
        return ResponseEntity.ok(updatedAppointment);
    }

}
