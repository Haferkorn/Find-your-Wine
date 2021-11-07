package fr.anettehaferkorn.backend.controller;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;
import fr.anettehaferkorn.backend.repo.WineGrapeRepository;
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
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RecommendationControllerTest {

        WineGrapeRepository wineGrapeRepository= mock(WineGrapeRepository.class);

        @LocalServerPort
        private int port;
        @Autowired
        private TestRestTemplate testRestTemplate;

        @Test
        void getRecommendation() {
            //Given
            String URL = "http://localhost:" + port + "/recommendation";
            WineQuery wineQuery= new WineQuery("dinner","white","idK","light","dry");
            //Mock
            List<WineGrape>mockedRecommendations=List.of(
                    new WineGrape("Merlot","dinner","red","France","light","sweet","abcd"),
                    new WineGrape("BBBB","dinner","red","France","strong","dry","abcd"),
                    new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd")
            );
            when(wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion())).thenReturn(mockedRecommendations);

            //When
            ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, wineQuery, RecommendationDTO[].class);
            //Then
            assertThat(response.getStatusCode(), is(HttpStatus.OK));

        }

    @Test
    void getRecommendation_With_Multiple_WineStyles() {
        //Given
        String URL = "http://localhost:" + port + "/recommendation";
        WineQuery wineQuery= new WineQuery("dinner","white","idK","light","dry");
        //Mock
        List<WineGrape>mockedRecommendations=List.of(
                new WineGrape("Merlot","dinner","red","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","red","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd")
        );
        when(wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion())).thenReturn(mockedRecommendations);


        //When
        ResponseEntity<RecommendationDTO[]> response = testRestTemplate.postForEntity(URL, wineQuery, RecommendationDTO[].class);
        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

    }


}