package fr.anettehaferkorn.backend.wineFinderAPI.controller;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.service.FindYourWineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/filterWines")
public class WineDetailsAPI {

    FindYourWineService findYourWineService;

    @Autowired
    public WineDetailsAPI(FindYourWineService findYourWineService) {
        this.findYourWineService = findYourWineService;
    }

    @PostMapping
    public List<WineBottleDTO> getFilteredWines(@RequestBody FilterDTO filterDTO ){
        return findYourWineService.getFilterdWines(filterDTO);
    }



}
