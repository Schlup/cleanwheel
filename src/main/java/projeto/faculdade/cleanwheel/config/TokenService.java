package projeto.faculdade.cleanwheel.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import projeto.faculdade.cleanwheel.model.Person;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.UUID;

@Service
public class TokenService {

    //Ta la no application.properties
    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(Person person) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer("auth-api")
                    .withSubject(person.getEmail())
                    .withClaim("userId", person.getUuid().toString()) // Adicionado para por o UUID no token tbm
                    .withExpiresAt(genExpirationDate())
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException exception) {
            throw new RuntimeException("Error while generating token " + exception);
        }
    }

    public String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("auth-api")
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException exception) {
            return "No user, or error, idk";
        }
    }

    private Instant genExpirationDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

    //Descriptografa o token e pega o UUID dele
    public UUID getUUIDFromToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String userId = JWT.require(algorithm)
                    .withIssuer("auth-api")
                    .build()
                    .verify(token)
                    .getClaim("userId")
                    .asString();
            return UUID.fromString(userId);
        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Error while verifying token " + exception);
        }
    }

}