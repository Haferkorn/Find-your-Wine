package fr.anettehaferkorn.backend.utils;

import fr.anettehaferkorn.backend.Recommendations.model.WineGrape;
import fr.anettehaferkorn.backend.Recommendations.repo.WineGrapeRepository;
import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import fr.anettehaferkorn.backend.wineFinderAPI.repo.WineBottlesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService {

    WineGrapeRepository wineGrapeRepository;
    WineBottlesRepo findYourWineRepo;

    @Autowired
    public DBService(WineGrapeRepository wineGrapeRepository, WineBottlesRepo findYourWineRepo) {
        this.wineGrapeRepository = wineGrapeRepository;
        this.findYourWineRepo = findYourWineRepo;
    }

    public void saveToDB_WineGrapes(List<WineGrape> wineGrapes){
        wineGrapeRepository.saveAll(wineGrapes);
    }
    public void saveToDB_WineBottels(List<WineBottleDTO> winebottles){
        findYourWineRepo.saveAll(winebottles);
    }
}
