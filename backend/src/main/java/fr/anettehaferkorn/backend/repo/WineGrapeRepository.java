package fr.anettehaferkorn.backend.repo;

import fr.anettehaferkorn.backend.model.WineQueryDTO;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineGrapeRepository extends PagingAndSortingRepository<WineQueryDTO, String> {
    public List<WineQueryDTO> findAll();
}