package fr.anettehaferkorn.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WineQuery {

    private String occasion;
    private String wineStyle;
    private String region;
    private String alcohol;
    private String taste;
}
