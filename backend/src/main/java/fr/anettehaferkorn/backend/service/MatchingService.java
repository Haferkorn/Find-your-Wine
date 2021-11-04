package fr.anettehaferkorn.backend.service;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQueryDTO;
import fr.anettehaferkorn.backend.repo.WineGrapeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchingService {

    WineGrapeRepository wineGrapeRepository;

    @Autowired
    public MatchingService(WineGrapeRepository wineGrapeRepository) {
        this.wineGrapeRepository = wineGrapeRepository;
    }

    public List<RecommendationDTO> getMatchingWines(WineQueryDTO wineQueryDTO){

        List<RecommendationDTO> recommendations=new ArrayList<>();
        return recommendations;
    }

    public List<WineQueryDTO> getAllWine(){
        return wineGrapeRepository.findAll();
    }




}
