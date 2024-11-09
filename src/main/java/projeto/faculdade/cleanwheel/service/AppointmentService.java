package projeto.faculdade.cleanwheel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.dto.AppointmentDTO;
import projeto.faculdade.cleanwheel.dto.GetAppointmentsDTO;
import projeto.faculdade.cleanwheel.dto.GetBusinessDTO;
import projeto.faculdade.cleanwheel.model.*;
import projeto.faculdade.cleanwheel.repository.*;

import java.util.UUID;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private AppointmentStatusRepository statusRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    public Appointment createAppointment(UUID personUuid, AppointmentDTO appointmentDTO) {
        Appointment appointment = new Appointment();

        // Carrega as referências a partir do UUID ou ID
        Business business = businessRepository.findById(appointmentDTO.business()).orElseThrow(() -> new RuntimeException("Business not found"));
        Person person = personRepository.findById(personUuid).orElseThrow(() -> new RuntimeException("Person not found"));
        AppointmentStatus status = statusRepository.findById(appointmentDTO.status()).orElseThrow(() -> new RuntimeException("Status not found"));
        projeto.faculdade.cleanwheel.model.Service service = serviceRepository.findById(appointmentDTO.service()).orElseThrow(() -> new RuntimeException("Service not found"));

        // Seta os dados
        appointment.setBusiness(business);
        appointment.setPerson(person);
        appointment.setStatus(status);
        appointment.setService(service);
        appointment.setDate(appointmentDTO.date());
        appointment.setTime(appointmentDTO.time());

        return appointmentRepository.save(appointment);
    }

    public Page<GetAppointmentsDTO> listAllAppointments(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Appointment> appointments = appointmentRepository.findAll(pageable);

        return appointments.map(appointment -> {
            return new GetAppointmentsDTO(
                    appointment.getUuid(),
                    appointment.getBusiness().getUuid(),
                    appointment.getPerson().getUuid(),
                    appointment.getStatus().getId(),
                    appointment.getService().getId(),
                    appointment.getDate(),
                    appointment.getTime()
            );
        });
    }
}