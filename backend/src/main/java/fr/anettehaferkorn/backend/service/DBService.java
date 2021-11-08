package fr.anettehaferkorn.backend.service;

import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.repo.WineGrapeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService {

    WineGrapeRepository wineGrapeRepository;

    @Autowired
    public DBService(WineGrapeRepository wineGrapeRepository) {
        this.wineGrapeRepository = wineGrapeRepository;
    }

    public void saveToDB(List<WineGrape> wineGrapes){
        wineGrapeRepository.saveAll(wineGrapes);
    }
}
