package fr.anettehaferkorn.backend.wineFinderAPI.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("WineBottles")
public class WineBottleDTO {

        private String country;
        private String description;
        private Integer points;
        private double price;
        private String title;
        private String variety;
        private String winery;

}
