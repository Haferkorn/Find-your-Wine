package fr.anettehaferkorn.backend.security.repo;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends MongoRepository<AppUserDTO, String> {
}