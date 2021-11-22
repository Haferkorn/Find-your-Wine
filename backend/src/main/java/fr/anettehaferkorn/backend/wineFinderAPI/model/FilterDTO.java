package fr.anettehaferkorn.backend.wineFinderAPI.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FilterDTO {
    private String variety;
    private String region;
}
