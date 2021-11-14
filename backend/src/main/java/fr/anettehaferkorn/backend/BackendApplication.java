package fr.anettehaferkorn.backend;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class BackendApplication {


    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);

    }

}
