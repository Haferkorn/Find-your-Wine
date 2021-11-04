package fr.anettehaferkorn.backend.service;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineGrape;

import java.util.ArrayList;
import java.util.List;

public class QueryToRecommendationMapper {



    public static List<RecommendationDTO> mapQuerytoRecommendation(List<WineGrape> wineGrapes){
        List<RecommendationDTO> recommendationDTOS= new ArrayList<>();
        for (WineGrape wineOfDB: wineGrapes) {
            recommendationDTOS.add(
            new RecommendationDTO(
                    wineOfDB.getName(),
                    wineOfDB.getOccasion(),
                    wineOfDB.getWineStyle(),
                    wineOfDB.getRegion(),
                    wineOfDB.getAlcohol(),
                    wineOfDB.getTaste(),
                    wineOfDB.getDescription(),
                    0));
        }
        return  recommendationDTOS;
    }
}
