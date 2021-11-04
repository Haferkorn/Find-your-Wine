package fr.anettehaferkorn.backend.service;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;
import fr.anettehaferkorn.backend.repo.WineGrapeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchingService {

    WineGrapeRepository wineGrapeRepository;

    @Autowired
    public MatchingService(WineGrapeRepository wineGrapeRepository) {
        this.wineGrapeRepository = wineGrapeRepository;
    }

    public List<RecommendationDTO> getMatchingWines(WineQuery wineQuery){
        List<WineGrape> matchingWineByOccasionAndStyle=matchFirstFilterLayer(wineQuery);
        List<RecommendationDTO> recommendations= QueryToRecommendationMapper.mapQuerytoRecommendation(matchingWineByOccasionAndStyle);
        return recommendations;
    }

    public List<WineGrape> getAllWine(){
        return wineGrapeRepository.findAll();
    }

    private List<WineGrape> matchFirstFilterLayer(WineQuery wineQuery){
        return wineGrapeRepository.findWineQueryDTOByOccasionAndWineStyle
                (wineQuery.getOccasion(), wineQuery.getWineStyle());
    }






}
