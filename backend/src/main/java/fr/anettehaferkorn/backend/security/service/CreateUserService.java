package fr.anettehaferkorn.backend.security.service;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {
    @Autowired
    private AppUserRepo appUserRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

    public void createUser(String name, String password){
        appUserRepo.save(AppUserDTO.builder()
                .username(name)
                .password(passwordEncoder.encode(password))
                .build());
    }
}
