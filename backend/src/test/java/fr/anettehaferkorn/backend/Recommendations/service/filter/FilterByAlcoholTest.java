package fr.anettehaferkorn.backend.Recommendations.service.filter;

import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FilterByAlcoholTest {

    @Test
    void matchByAlcohol() {

        WineQuery wineQuery=new WineQuery("dinner","red","idK","light","sweet");

        List<RecommendationDTO>mockedRecommendations=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",1),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );

        List<RecommendationDTO>mockedMatches=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("CCCC","dinner","red","France","strong","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",3)
        );

        List<RecommendationDTO> actual=FilterByAlcohol.matchByAlcohol(wineQuery,mockedRecommendations);

        assertEquals(mockedMatches,actual);

    }

    @Test
    void matchByAlcohol_noMatch() {

        WineQuery wineQuery=new WineQuery("dinner","red","idK","strong","sweet");

        List<RecommendationDTO>mockedRecommendations=List.of(
                new RecommendationDTO("AAAA","dinner","red","France","light","sweet","abcd",1),
                new RecommendationDTO("CCCC","dinner","red","France","light","sweet","abcd",2),
                new RecommendationDTO("EEEE","dinner","red","Spain","light","sweet","abcd",2)
        );


        List<RecommendationDTO> actual=FilterByAlcohol.matchByAlcohol(wineQuery,mockedRecommendations);

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


        List<RecommendationDTO> actual=FilterByAlcohol.matchByAlcohol(wineQuery,mockedRecommendations);

        assertEquals(mockedMatches,actual);

    }
}