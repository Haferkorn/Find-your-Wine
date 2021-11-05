package fr.anettehaferkorn.backend.repo;

import fr.anettehaferkorn.backend.model.WineGrape;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineGrapeRepository extends PagingAndSortingRepository<WineGrape, String> {
    List<WineGrape> findAll();

    List<WineGrape> findWineQueryDTOByOccasion(String occasion);
}