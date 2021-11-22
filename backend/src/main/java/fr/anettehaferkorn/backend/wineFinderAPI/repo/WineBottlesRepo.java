package fr.anettehaferkorn.backend.wineFinderAPI.repo;

import fr.anettehaferkorn.backend.wineFinderAPI.model.WineBottleDTO;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;

@Repository
public interface WineBottlesRepo extends PagingAndSortingRepository<WineBottleDTO, String>, QueryByExampleExecutor<WineBottleDTO> {

    ArrayList<WineBottleDTO> findAllByVarietyAndCountry(String variety, String country);
}
