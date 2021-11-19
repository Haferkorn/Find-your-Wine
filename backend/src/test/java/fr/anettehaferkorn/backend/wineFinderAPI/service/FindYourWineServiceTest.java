package fr.anettehaferkorn.backend.wineFinderAPI.service;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FindYourWineServiceTest {

    WineBottlesRepo wineBottlesRepo= mock(WineBottlesRepo.class);
/*
    @Test
    void getMatchingWines() {
        FindYourWineService findYourWineService=new FindYourWineService(wineBottlesRepo);

        FilterDTO filterDTO =new FilterDTO("Merlot", "France");

        List<WineBottleDTO>mockedMatches=List.of(new WineBottleDTO(
                "France",
                "FFFFFF",
                87,
                14.0,
                "TTT",
                "Merlot",
                "Rainstorm")

        );

        when(wineBottlesRepo.findAllByVarietyAndCountry(filterDTO.getVariety(),filterDTO.getRegion())).thenReturn(mockedMatches);

        //When
        List<WineBottleDTO> actual = findYourWineService.getFilteredWines(filterDTO);
        //Then
        assertEquals(mockedMatches,actual);

    }

    @Test
    void getMatchingWines_NO_MATCH() {
        FindYourWineService findYourWineService=new FindYourWineService(wineBottlesRepo);

        FilterDTO filterDTO =new FilterDTO("Riesling", "Germany");

        List<WineBottleDTO>mockedMatches=List.of();

        when(wineBottlesRepo.findAllByVarietyAndCountry(filterDTO.getVariety(),filterDTO.getRegion())).thenReturn(mockedMatches);

        //When
        List<WineBottleDTO> actual = findYourWineService.getFilteredWines(filterDTO);
        //Then
        assertEquals(mockedMatches, actual);

    }
*/
    @Test
    void getMatchingWines_TOO_MANY_MATCHES() {
        FindYourWineService findYourWineService=new FindYourWineService(wineBottlesRepo);

        FilterDTO filterDTO =new FilterDTO("Riesling", "Germany");
        ArrayList<WineBottleDTO> mockedRecommendations= new ArrayList<>(List.of(

                //Done
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        90,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                //Done
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        99,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                //Done
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        93,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        84,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),

                //Done
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        100,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        85,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                //Done
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        88,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine")

                ));
        ArrayList<WineBottleDTO>mockedMatches=new ArrayList<>(List.of(
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        100,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        99,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        93,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),
                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        90,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine"),

                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        88,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine")

        ));


        when(wineBottlesRepo.findAllByVarietyAndCountry(filterDTO.getVariety(),filterDTO.getRegion())).thenReturn(mockedRecommendations);

        //When
        List<WineBottleDTO> actual = findYourWineService.getFilteredWines(filterDTO);
        //Then
        assertEquals(mockedMatches, actual);

    }
}