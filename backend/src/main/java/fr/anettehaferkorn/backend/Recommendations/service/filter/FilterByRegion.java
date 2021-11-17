package fr.anettehaferkorn.backend.Recommendations.service.filter;

import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;

import java.util.List;
import java.util.Objects;

public class FilterByRegion {

    public static List<RecommendationDTO> matchByRegion(WineQuery wineQuery, List<RecommendationDTO> wineMatches){
        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getRegion(), wineQuery.getRegion())||
                    (Objects.equals(wineQuery.getRegion(),"other"))||
                    (Objects.equals(wineQuery.getRegion(),"idK"))
            ){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return wineMatches;
    }
}
