package fr.anettehaferkorn.backend.Recommendations.service;
import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineGrape;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;
import fr.anettehaferkorn.backend.Recommendations.repo.WineGrapeRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MatchingServiceTest {
     WineGrapeRepository wineGrapeRepository= mock(WineGrapeRepository.class);

    @Test
    void getMatchingWines() {
        MatchingService matchingService = new MatchingService(wineGrapeRepository);
        WineQuery wineQuery=new WineQuery("dinner","red","France","light","sweet");
        List<WineGrape>mockedRecommendations=List.of(
                new WineGrape("Merlot","dinner","red","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","red","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd")
                );
        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("Merlot","dinner","red","France","light","sweet","abcd",3),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2)
        );

       when(wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion())).thenReturn(mockedRecommendations);

        //When
        List<RecommendationDTO> actual = matchingService.getMatchingWines(wineQuery);
        //Then
        assertEquals(mockedMatches, actual);

    }

    @Test
    void getMatchingWines_2() {
        MatchingService matchingService = new MatchingService(wineGrapeRepository);
        WineQuery wineQuery=new WineQuery("dinner","red","idK","light","sweet");
        List<WineGrape>mockedRecommendations=List.of(
                new WineGrape("AAAA","dinner","red","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","red","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
                new WineGrape("DDDD","dinner","red","Italy","strong","dry","abcd"),
                new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd")
        );
        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",3),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",3),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2)

        );

        when(wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion())).thenReturn(mockedRecommendations);

        //When
        List<RecommendationDTO> actual = matchingService.getMatchingWines(wineQuery);
        //Then
        assertEquals(mockedMatches, actual);

    }

    @Test
    void getMatchingWines_NoPerfectMatch() {
        MatchingService matchingService = new MatchingService(wineGrapeRepository);
        WineQuery wineQuery=new WineQuery("dinner","red","Italy","light","sweet");
        List<WineGrape>mockedRecommendations=List.of(
                new WineGrape("AAAA","dinner","red","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","red","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
                new WineGrape("DDDD","dinner","red","Italy","strong","dry","abcd"),
                new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd")
        );
        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)

        );

        when(wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion())).thenReturn(mockedRecommendations);

        //When
        List<RecommendationDTO> actual = matchingService.getMatchingWines(wineQuery);
        //Then
        assertEquals(mockedMatches, actual);

    }

}