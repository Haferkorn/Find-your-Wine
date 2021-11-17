package fr.anettehaferkorn.backend.Recommendations.service.filter;

import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;

import java.util.List;
import java.util.Objects;

public class FilterByTaste {

    public static List<RecommendationDTO> matchByTaste(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getTaste(), wineQuery.getTaste()) ||
                    (Objects.equals(wineQuery.getTaste(),"other"))||
                    (Objects.equals(wineQuery.getTaste(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return wineMatches;
    }
}
