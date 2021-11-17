package fr.anettehaferkorn.backend.security.controller;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.repo.AppUserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SignUpControllerTest {

    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    AppUserRepo appUserRepo;

    @Test
    void createUser() {
        //Given
        String URL = "http://localhost:" + port + "/auth/createUser";
       AppUserDTO testUser= new AppUserDTO("Pferd","hase");

        //When
        ResponseEntity<AppUserDTO> response = testRestTemplate.postForEntity(URL, testUser, AppUserDTO.class);
        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

        //Test if user has been created
        Optional<AppUserDTO> createdUser=appUserRepo.findById("Pferd");
        assertNotNull(createdUser);

        //Test equality
        assertEquals(createdUser.get().getUsername(),testUser.getUsername());

    }



}