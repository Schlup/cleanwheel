package projeto.faculdade.cleanwheel.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .cors(withDefaults()) // Usa a configuração do filtro CORS acima
                .csrf(csrf -> csrf.disable()) // Desativa CSa CSRF para facilitar o desenvolvimento
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/register").permitAll()

                        .requestMatchers(HttpMethod.PUT, "/person/update").hasRole("USER")
                        .requestMatchers(HttpMethod.GET, "/person/profile").hasRole("USER")

                        .requestMatchers(HttpMethod.POST, "/business/register").hasRole("USER")
                        .requestMatchers(HttpMethod.PUT, "/business/update/{uuid}").hasRole("OWNER")
                        .requestMatchers(HttpMethod.GET, "/business/listAllBusiness").hasRole("USER")
                        .requestMatchers(HttpMethod.GET, "/business/{uuid}").hasRole("USER")

                        .requestMatchers(HttpMethod.POST, "/employee/create").hasRole("OWNER")
                        .requestMatchers(HttpMethod.DELETE, "/employee/delete/{employeeId}").hasRole("OWNER")
                        .requestMatchers(HttpMethod.GET, "/employee/list/{businessUuid}").hasRole("OWNER")

                        .requestMatchers(HttpMethod.POST, "/appointment/create").hasRole("USER")
                        .requestMatchers(HttpMethod.GET, "/appointment/listAllAppointments").hasRole("EMPLOYEE")
                        .requestMatchers(HttpMethod.GET, "/{appointmentId}/status").hasRole("EMPLOYEE")

                        //ADD THE OTHERS ENDPOINTS
                        .anyRequest().authenticated()// ? q poha isso faz
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}