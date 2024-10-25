package projeto.faculdade.cleanwheel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "business_address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusinessAddress {

    @Id
    @Column(name = "business_address")
    private UUID businessUuid;

    @OneToOne
    @JoinColumn(name = "business_uuid", referencedColumnName = "uuid", insertable = false, updatable = false)
    private Business business;

    @Column(name = "street_name", length = 50)
    private String streetName;

    @Column(name = "complement", length = 50)
    private String complement;

    @Column(name = "neighborhood", length = 50)
    private String neighborhood;

    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "state", length = 50)
    private String state;

    @Column(name = "country", length = 50)
    private String country;

    @Column(name = "postal_code", length = 10)
    private String postalCode;
}