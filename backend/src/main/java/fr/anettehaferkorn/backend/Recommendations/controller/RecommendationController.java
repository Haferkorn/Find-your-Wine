package fr.anettehaferkorn.backend.Recommendations.controller;

import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineGrape;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;
import fr.anettehaferkorn.backend.Recommendations.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {

    MatchingService matchingService;

    @Autowired
    public RecommendationController(MatchingService matchingService) {
        this.matchingService = matchingService;
    }

    @GetMapping
    public List<WineGrape> getAllWines(){
        return matchingService.getAllWines();
    }

    @PostMapping
    public List<RecommendationDTO> getMatchingWines(@RequestBody WineQuery wineQuery){
        return matchingService.getMatchingWines(wineQuery);
    }
}
