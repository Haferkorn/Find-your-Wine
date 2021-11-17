package fr.anettehaferkorn.backend.wineFinderAPI.service;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FindYourWineService {

    WineBottlesRepo wineBottlesRepo;

    @Autowired
    public FindYourWineService(WineBottlesRepo wineBottlesRepo) {
        this.wineBottlesRepo = wineBottlesRepo;
    }

    public List<WineBottleDTO> getFilteredWines(FilterDTO filterDTO) {
        return wineBottlesRepo.findAllByVarietyAndCountry(filterDTO.getVariety(), filterDTO.getRegion());
    }

}
