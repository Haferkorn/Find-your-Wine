package fr.anettehaferkorn.backend.controller;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQuery;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RecommendationControllerTest {

        @LocalServerPort
        private int port;
        @Autowired
        private TestRestTemplate testRestTemplate;

        @Test
        void getRecommendation() {
            //Given
            String URL = "http://localhost:" + port + "/recommendation";
            //When
            ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, new WineQuery("dinner","white","idK","light","dry"), RecommendationDTO[].class);
            //Then
            assertThat(response.getStatusCode(), is(HttpStatus.OK));

        }

    @Test
    void getRecommendation_With_Multiple_WineStyles() {
        //Given
        String URL = "http://localhost:" + port + "/recommendation";
        //When
        ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, new WineQuery("dinner","white,red","idK","light","dry"), RecommendationDTO[].class);
        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

    }


}