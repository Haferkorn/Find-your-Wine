package fr.anettehaferkorn.backend.controller;

import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineQueryDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {

    @PostMapping
    public List<RecommendationDTO> getMatchingWines(@RequestBody WineQueryDTO){
        return matchingService.getMatchingWines;
    }
}
