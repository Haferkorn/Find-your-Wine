package fr.anettehaferkorn.backend.Recommendations.controller;

import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineGrape;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;
import fr.anettehaferkorn.backend.Recommendations.repo.WineGrapeRepository;
import fr.anettehaferkorn.backend.utils.DBService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RecommendationControllerTest {

        @LocalServerPort
        private int port;
        @Autowired
        private TestRestTemplate testRestTemplate;

        @Autowired
        DBService dbService;

        @Autowired
        WineGrapeRepository wineGrapeRepository;

        @BeforeEach
        public void clearDb() {
            wineGrapeRepository.deleteAll();
        }

        @Test
        void getRecommendation() {
            //Fill Data into DB
            List<WineGrape> mockedRecommendations=List.of(
                    new WineGrape("Merlot","dinner","red","France","light","sweet","abcd"),
                    new WineGrape("BBBB","dinner","white","France","strong","dry","abcd"),
                    new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd")
            );

            dbService.saveToDB_WineGrapes(mockedRecommendations);


            //Given
            String URL = "http://localhost:" + port + "/recommendation";
            WineQuery wineQuery= new WineQuery("dinner","red","France","strong","sweet");

            //When
            ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, wineQuery, RecommendationDTO[].class);
            //Then
            assertThat(response.getStatusCode(), is(HttpStatus.OK));

        }

    @Test
    void getRecommendation_With_Multiple_WineStyles() {
        //Fill Data into DB
        List<WineGrape> mockedRecommendations=List.of(
                new WineGrape("Merlot","dinner","red","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","white","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd")
        );

        dbService.saveToDB_WineGrapes(mockedRecommendations);


        //Given
        String URL = "http://localhost:" + port + "/recommendation";
        WineQuery wineQuery= new WineQuery("dinner","white","idK","light","dry");

        //When
        ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, wineQuery, RecommendationDTO[].class);
        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

    }


}