package fr.anettehaferkorn.backend.security.controller;

import fr.anettehaferkorn.backend.security.model.AppUserDTO;
import fr.anettehaferkorn.backend.security.service.JWTUtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtilService jwtService;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JWTUtilService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }


    @PostMapping
    public String login(@RequestBody AppUserDTO appUser){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(appUser.getUsername(), appUser.getPassword()));
        return jwtService.createToken(new HashMap<>(), appUser.getUsername());
    }
}