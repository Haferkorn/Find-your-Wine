package fr.anettehaferkorn.backend.controller;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQueryDTO;
import fr.anettehaferkorn.backend.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {

    MatchingService matchingService;

    @Autowired
    public RecommendationController(MatchingService matchingService) {
        this.matchingService = matchingService;
    }

    @PostMapping
    public List<RecommendationDTO> getMatchingWines(@RequestBody WineQueryDTO wineQueryDTO){
        return matchingService.getMatchingWines(wineQueryDTO);
    }
}
