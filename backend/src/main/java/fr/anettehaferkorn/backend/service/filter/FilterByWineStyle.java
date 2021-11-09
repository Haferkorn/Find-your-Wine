package fr.anettehaferkorn.backend.service.filter;

import fr.anettehaferkorn.backend.controller.exception.NoMatchingWineException;
import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class FilterByWineStyle {
    public static List<WineGrape> filteringByWineStyle(List<WineGrape> matchingWineByOccasion, WineQuery wineQuery) {
        List<String> wineStyles=checkForMultipleWineStyles(wineQuery);
        List<WineGrape>filteredWineGrapes=new ArrayList<>();

        for (String wineStyle: wineStyles) {
            for (WineGrape wineGrape : matchingWineByOccasion) {
                if (Objects.equals(wineGrape.getWineStyle(), wineStyle)) {
                    filteredWineGrapes.add(wineGrape);
                }
            }
        }
        return filteredWineGrapes;
    }

    private static List<String> splitPossibleStyles(String wineStyles){
        return List.of(wineStyles.split(","));
    }

    private static List<String> checkForMultipleWineStyles(WineQuery wineQuery){
        if(wineQuery.getWineStyle().contains(",")){
           return splitPossibleStyles(wineQuery.getWineStyle());
        }return List.of(wineQuery.getWineStyle());
    }
}
