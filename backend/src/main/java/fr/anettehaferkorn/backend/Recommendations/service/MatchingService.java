package fr.anettehaferkorn.backend.Recommendations.service;
import fr.anettehaferkorn.backend.Recommendations.model.RecommendationDTO;
import fr.anettehaferkorn.backend.Recommendations.model.WineGrape;
import fr.anettehaferkorn.backend.Recommendations.model.WineQuery;
import fr.anettehaferkorn.backend.Recommendations.repo.WineGrapeRepository;
import fr.anettehaferkorn.backend.Recommendations.service.filter.FilterByAlcohol;
import fr.anettehaferkorn.backend.Recommendations.service.filter.FilterByRegion;
import fr.anettehaferkorn.backend.Recommendations.service.filter.FilterByTaste;
import fr.anettehaferkorn.backend.Recommendations.service.filter.FilterByWineStyle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class MatchingService {

    WineGrapeRepository wineGrapeRepository;

    @Autowired
    public MatchingService(WineGrapeRepository wineGrapeRepository) {
        this.wineGrapeRepository = wineGrapeRepository;
    }

    public List<WineGrape> getAllWines(){
        return wineGrapeRepository.findAll();
    }

    public List<RecommendationDTO> getMatchingWines(WineQuery wineQuery){
        List<WineGrape> matchingWineByOccasion= matchByOccasion(wineQuery);
        List<WineGrape>matchingWinesByWineStyle=FilterByWineStyle.filteringByWineStyle(matchingWineByOccasion,wineQuery);
        List<RecommendationDTO> recommendations= QueryToRecommendationMapper.mapQuerytoRecommendation(matchingWinesByWineStyle);
        List<RecommendationDTO> filteredByRegion= FilterByRegion.matchByRegion(wineQuery,recommendations);
        List<RecommendationDTO>filteredByTaste= FilterByTaste.matchByTaste(wineQuery,filteredByRegion);
        List<RecommendationDTO> filteredByAlcohol= FilterByAlcohol.matchByAlcohol(wineQuery,filteredByTaste);
        List<RecommendationDTO>filterLowMatches=removeLowMatches(filteredByAlcohol);
        return orderMatches(filterLowMatches);
    }

    private List<WineGrape> matchByOccasion(WineQuery wineQuery){
        List<WineGrape>filteredWineGrapes=wineGrapeRepository.findWineQueryDTOByOccasion(wineQuery.getOccasion());
        return filteredWineGrapes;
    }

    private List<RecommendationDTO> removeLowMatches(List<RecommendationDTO> matches){
            matches.removeIf(match -> match.getMatchingPoints() <2);
            return orderMatches(matches);
    }

    private List<RecommendationDTO> orderMatches(List<RecommendationDTO> matches){
        List<RecommendationDTO> orderedMatches=new ArrayList<>();
        Integer currentValue=3;
        for (RecommendationDTO match:matches) {
            if(Objects.equals(match.getMatchingPoints(), currentValue)){
                orderedMatches.add(0,match);
            }else {
                orderedMatches.add(orderedMatches.size(),match);
            }
        }
        return orderedMatches;
    }


}
