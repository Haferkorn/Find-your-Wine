package fr.anettehaferkorn.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("WineGrapes")
public class WineGrape {

    private String name;
    private String occasion;
    private String wineStyle;
    private String region;
    private String alcohol;
    private String taste;
    private String description;

}
