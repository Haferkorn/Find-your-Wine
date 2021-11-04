package fr.anettehaferkorn.backend.controller;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;
import fr.anettehaferkorn.backend.service.MatchingService;
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
    public List<WineGrape> getAllWine(){
        return matchingService.getAllWine();
    }

    @PostMapping
    public List<RecommendationDTO> getMatchingWines(@RequestBody WineQuery wineQuery){
        return matchingService.getMatchingWines(wineQuery);
    }
}
