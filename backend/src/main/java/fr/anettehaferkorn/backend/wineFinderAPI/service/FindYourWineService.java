package fr.anettehaferkorn.backend.wineFinderAPI.service;

import fr.anettehaferkorn.backend.wineFinderAPI.model.FilterDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FindYourWineService {

    WineBottlesRepo findyourwinerepo;

    @Autowired
    public FindYourWineService(WineBottlesRepo findyourwinerepo) {
        this.findyourwinerepo = findyourwinerepo;
    }

    public List<WineBottleDTO> getFilterdWines(FilterDTO filterDTO) {
        Example<WineBottleDTO> example = Example.of(WineBottleDTO.builder()
                .variety(filterDTO.getVariety())
                .country(filterDTO.getRegion())
                .build());
        return findyourwinerepo.findAll(example);
    }
}
