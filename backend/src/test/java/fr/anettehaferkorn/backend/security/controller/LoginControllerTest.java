package fr.anettehaferkorn.backend.security.controller;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.repo.AppUserRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LoginControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${jwt.secret}")
    private String JWT_SECRET;

    @Test
    void loginWithValidCredentials() {
        //GIVEN
        appUserRepo.save(AppUserDTO.builder()
                .username("unitTestUser")
                .password(passwordEncoder.encode("1234"))
                .build());
        //WHEN
        AppUserDTO loginCredentials = AppUserDTO.builder().username("unitTestUser").password("1234").build();
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", loginCredentials, String.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Claims body = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(response.getBody())
                .getBody();
        assertThat(body.getSubject(), is("unitTestUser"));
    }


}