package projeto.faculdade.cleanwheel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "business")
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_uuid", nullable = false)
    @JsonIgnore
    private Person owner;

    private String name;

    @OneToOne(mappedBy = "business", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private BusinessContact contact;

    @OneToOne(mappedBy = "business", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private BusinessAddress address;
}