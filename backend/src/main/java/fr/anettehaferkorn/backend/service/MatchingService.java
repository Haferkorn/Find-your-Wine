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
        List<WineGrape> matchingWineByOccasionAndStyle=matchFirstFilterLayer(wineQuery);
        List<RecommendationDTO> recommendations= QueryToRecommendationMapper.mapQuerytoRecommendation(matchingWineByOccasionAndStyle);
        List<RecommendationDTO> optionFilteredRecommendations=matchSecondFilterLayer(wineQuery,recommendations);
        return cleanMatches(optionFilteredRecommendations);

    }
    public List<WineGrape> getAllWines(){
        return wineGrapeRepository.findAll();
    }

    private List<WineGrape> matchFirstFilterLayer(WineQuery wineQuery){
        return wineGrapeRepository.findWineQueryDTOByOccasionAndWineStyle
                (wineQuery.getOccasion(), wineQuery.getWineStyle());
    }

    @SuppressWarnings("java:S1192")
    private List<RecommendationDTO> matchSecondFilterLayer(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getRegion(), wineQuery.getRegion())||
                    (Objects.equals(wineQuery.getRegion(),"other"))||
                    (Objects.equals(wineQuery.getRegion(),"idK"))
            ){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return matchThirdFilterLayer(wineQuery,wineMatches);
    }

    private List<RecommendationDTO> matchThirdFilterLayer(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getAlcohol(), wineQuery.getAlcohol()) ||
                    (Objects.equals(wineQuery.getRegion(),"other"))||
                    (Objects.equals(wineQuery.getRegion(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return matchFourthFilterLayer(wineQuery,wineMatches);
    }

    private List<RecommendationDTO> matchFourthFilterLayer(WineQuery wineQuery, List<RecommendationDTO> wineMatches){

        for (RecommendationDTO match: wineMatches) {
            if(Objects.equals(match.getTaste(), wineQuery.getTaste()) ||
                    (Objects.equals(wineQuery.getRegion(),"other"))||
                    (Objects.equals(wineQuery.getRegion(),"idK"))){
                match.setMatchingPoints(match.getMatchingPoints()+1);
            }
        }
        return wineMatches;
    }

    public List<RecommendationDTO>cleanMatches(List<RecommendationDTO> matches){
            matches.removeIf(match -> match.getMatchingPoints() <2);
            return matches;
    }


}
