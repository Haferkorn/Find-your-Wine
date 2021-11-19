package fr.anettehaferkorn.backend.wineFinderAPI.service;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class FindYourWineService {

    WineBottlesRepo wineBottlesRepo;

    @Autowired
    public FindYourWineService(WineBottlesRepo wineBottlesRepo) {
        this.wineBottlesRepo = wineBottlesRepo;
    }

    public List<WineBottleDTO> getFilteredWines(FilterDTO filterDTO) {
        ArrayList<WineBottleDTO>wines= wineBottlesRepo.findAllByVarietyAndCountry(filterDTO.getVariety(), filterDTO.getRegion());
        return filterByPoints(wines);
    }

    public List<WineBottleDTO>filterByPoints(ArrayList<WineBottleDTO>bottels){
        bottels.sort(Comparator.comparing(WineBottleDTO::getPoints));
        Collections.reverse(bottels);
        return bottels.stream().limit(5).collect(Collectors.toList());
    }


    public void addWine(WineBottleDTO wine) {
        wineBottlesRepo.save(wine);
    }
}
