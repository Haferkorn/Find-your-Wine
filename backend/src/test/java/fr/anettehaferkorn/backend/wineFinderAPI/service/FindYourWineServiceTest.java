package fr.anettehaferkorn.backend.wineFinderAPI.service;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FindYourWineServiceTest {

    WineBottlesRepo wineBottlesRepo= mock(WineBottlesRepo.class);

    @Test
    void getMatchingWines() {
        FindYourWineService findYourWineService=new FindYourWineService(wineBottlesRepo);

        FilterDTO filterDTO =new FilterDTO("Merlot", "France");
        List<WineBottleDTO> mockedRecommendations=List.of(
                new WineBottleDTO(
                        "France",
                        "xxx",
                        87,
                        14.0,
                        "TTT",
                        "Merlot",
                        "Rainstorm"),

                new WineBottleDTO(
                        "France",
                        "fff",
                        87,
                        17.0,
                        "TTT",
                        "Chardonnay",
                        "AnettesBestWine"),

                new WineBottleDTO(
                        "Spain",
                        "DDD",
                        84,
                        18.0,
                        "TTT",
                        "Merlot",
                        "AnettesBestWine")
        );
        List<WineBottleDTO>mockedMatches=List.of(new WineBottleDTO(
                "France",
                "xxx",
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
        assertEquals(mockedMatches, actual);

    }
}