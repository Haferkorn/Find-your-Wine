package fr.anettehaferkorn.backend.service.filter;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQuery;

import java.util.List;
import java.util.Objects;

public class FilterByAlcohol {

    public static List<RecommendationDTO> matchByAlcohol(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getAlcohol(), wineQuery.getAlcohol()) ||
                    (Objects.equals(wineQuery.getAlcohol(),"other"))||
                    (Objects.equals(wineQuery.getAlcohol(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return wineMatches;
    }
}
