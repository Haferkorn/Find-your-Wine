package fr.anettehaferkorn.backend.configuration;

import org.springframework.web.bind.annotation.GetMapping;

public class ReactRoutingForward {

    @GetMapping(value = "/**/{[path:[^\\.]*}")
    public String forwardToRoutUrl() {
        return "forward:/";
    }
}
