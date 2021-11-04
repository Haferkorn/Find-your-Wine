package fr.anettehaferkorn.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WineQueryDTO {

    private String occasion;
    private String wineStyle;
    private String region;
    private String alcohol;
    private String taste;

}
