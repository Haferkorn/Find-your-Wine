package fr.anettehaferkorn.backend.security.controller;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.service.CreateUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth/createUser")
public class CreateUserController {
    private CreateUserService createUserService;

    @Autowired
    public CreateUserController(CreateUserService createUserService) {
        this.createUserService = createUserService;
    }

    @PostMapping
    public void createUser(@RequestBody AppUserDTO appUserDTO){
        createUserService.createUser(appUserDTO.getUsername(), appUserDTO.getPassword());
}

}