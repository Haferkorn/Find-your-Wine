package fr.anettehaferkorn.backend.service;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQueryDTO;

import java.util.ArrayList;
import java.util.List;

public class QueryToRecommendationMapper {

    public static List<RecommendationDTO> mapQuerytoRecommendation(List<WineQueryDTO> wineQueryDTOS){
        List<RecommendationDTO> recommendationDTOS= new ArrayList<>();
        for (WineQueryDTO wineOfDB: wineQueryDTOS) {
            recommendationDTOS.add(
            new RecommendationDTO(
                    wineOfDB.getOccasion(),
                    wineOfDB.getWineStyle(),
                    wineOfDB.getRegion(),
                    wineOfDB.getAlcohol(),
                    wineOfDB.getTaste(),
                    0));
        }
        return  recommendationDTOS;
    }
}
