package fr.anettehaferkorn.backend.wineFinderAPI.controller;

import fr.anettehaferkorn.backend.utils.DBService;
import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.junit.jupiter.api.Assertions;
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
class WineDetailsAPITest {

    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    DBService dbService;

    @Autowired
    WineBottlesRepo wineBottlesRepo;

    @BeforeEach
    public void clearDb() {
        wineBottlesRepo.deleteAll();
    }

    @Test
    void getFilteredWines() {
        //Fill Data into DB
        List<WineBottleDTO> mockedRecommendations=List.of(
                new WineBottleDTO(
                        "US",
                        "Tart and snappy, the flavors of lime flesh and rind dominate. Some green pineapple pokes through",
                        87,
                        14.0,
                        "Rainstorm 2013 Pinot Gris (Willamette Valley)",
                        "Pinot Gris",
                        "Rainstorm"),

                new WineBottleDTO(
                        "France",
                        "Tart and snappy, the flavors of lime flesh and rind dominate. Some green pineapple pokes through",
                        87,
                        14.0,
                        "Rainstorm 2013 Pinot Gris (Willamette Valley)",
                        "Merlot",
                        "AnettesBestWine"),

                        new WineBottleDTO(
                                "France",
                                "Tart and snappy, the flavors of lime flesh and rind dominate. Some green pineapple pokes through",
                                87,
                                14.0,
                                "Rainstorm2 2013 Pinot Gris (Willamette Valley)",
                                "Merlot",
                                "AnettesBestWine")
        );

        dbService.saveToDB_WineBottels(mockedRecommendations);


        //Given
        String URL = "http://localhost:" + port + "/api/filterwines";
        FilterDTO filterDTO= new FilterDTO("Merlot","France");

        //When
        ResponseEntity<WineBottleDTO[]> response = testRestTemplate.postForEntity(URL, filterDTO, WineBottleDTO[].class);
        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Assertions.assertEquals( 2,response.getBody().length);

    }





}