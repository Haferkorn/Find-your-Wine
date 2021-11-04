package fr.anettehaferkorn.backend.repo;

import fr.anettehaferkorn.backend.model.WineGrape;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineGrapeRepository extends PagingAndSortingRepository<WineGrape, String> {
    public List<WineGrape> findAll();

    public List<WineGrape> findWineQueryDTOByOccasionAndWineStyle(String occasion, String wineStyle);
}