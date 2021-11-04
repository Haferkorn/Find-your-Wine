package fr.anettehaferkorn.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecommendationDTO {
    private String name;
    private String occasion;
    private String wineStyle;
    private String region;
    private String alcohol;
    private String taste;
    private String description;
    private Integer matchingPoints;

}
