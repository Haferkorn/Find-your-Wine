package fr.anettehaferkorn.backend.service.filter;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQuery;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FilterByRegionTest {

    @Test
    void matchByRegion() {

        WineQuery wineQuery=new WineQuery("dinner","red","France","light","sweet");

        List<RecommendationDTO> mockedRecommendations=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",1),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );

        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",3),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );

        List<RecommendationDTO> actual=FilterByRegion.matchByRegion(wineQuery,mockedRecommendations);

        assertEquals(mockedMatches,actual);

    }

    @Test
    void matchByRegion_noMatch() {

        WineQuery wineQuery=new WineQuery("dinner","red","Italy","strong","sweet");

        List<RecommendationDTO>mockedRecommendations=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",1),
                new RecommendationDTO("CCCC","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );

        List<RecommendationDTO> actual=FilterByRegion.matchByRegion(wineQuery,mockedRecommendations);

        assertEquals(mockedRecommendations,actual);

    }

    @Test
    void matchByAlcohol_idK() {

        WineQuery wineQuery=new WineQuery("dinner","red","idK","idK","sweet");

        List<RecommendationDTO>mockedRecommendations=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",1),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );
        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",3),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",3)
        );


        List<RecommendationDTO> actual=FilterByRegion.matchByRegion(wineQuery,mockedRecommendations);

        assertEquals(mockedMatches,actual);

    }
}