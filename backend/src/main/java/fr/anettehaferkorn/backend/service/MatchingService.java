package fr.anettehaferkorn.backend.service;
import fr.anettehaferkorn.backend.model.RecommendationDTO;
import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;
import fr.anettehaferkorn.backend.repo.WineGrapeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class MatchingService {

    WineGrapeRepository wineGrapeRepository;

    @Autowired
    public MatchingService(WineGrapeRepository wineGrapeRepository) {
        this.wineGrapeRepository = wineGrapeRepository;
    }

    public List<RecommendationDTO> getMatchingWines(WineQuery wineQuery){
        List<WineGrape> matchingWineByOccasionAndStyle= matchByOccasionAndWineStyle(wineQuery);
        List<RecommendationDTO> recommendations= QueryToRecommendationMapper.mapQuerytoRecommendation(matchingWineByOccasionAndStyle);
        List<RecommendationDTO> optionFilteredRecommendations= matchByRegion(wineQuery,recommendations);
        return removeLowMatches(optionFilteredRecommendations);

    }
    public List<WineGrape> getAllWines(){
        return wineGrapeRepository.findAll();
    }

    private List<WineGrape> matchByOccasionAndWineStyle(WineQuery wineQuery){
        return wineGrapeRepository.findWineQueryDTOByOccasionAndWineStyle
                (wineQuery.getOccasion(), wineQuery.getWineStyle());
    }

    @SuppressWarnings("java:S1192")
    private List<RecommendationDTO> matchByRegion(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getRegion(), wineQuery.getRegion())||
                    (Objects.equals(wineQuery.getRegion(),"other"))||
                    (Objects.equals(wineQuery.getRegion(),"idK"))
            ){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return matchByAlcohol(wineQuery,wineMatches);
    }

   private List<RecommendationDTO> matchByAlcohol(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getAlcohol(), wineQuery.getAlcohol()) ||
                    (Objects.equals(wineQuery.getAlcohol(),"other"))||
                    (Objects.equals(wineQuery.getAlcohol(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return matchByTaste(wineQuery,wineMatches);
    }

    private List<RecommendationDTO> matchByTaste(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getTaste(), wineQuery.getTaste()) ||
                    (Objects.equals(wineQuery.getTaste(),"other"))||
                    (Objects.equals(wineQuery.getTaste(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return wineMatches;
    }

    private List<RecommendationDTO> removeLowMatches(List<RecommendationDTO> matches){
            matches.removeIf(match -> match.getMatchingPoints() <2);
            return matches;
    }


}
