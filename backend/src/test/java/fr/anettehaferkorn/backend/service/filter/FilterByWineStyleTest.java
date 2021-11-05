package fr.anettehaferkorn.backend.service.filter;

import fr.anettehaferkorn.backend.model.WineGrape;
import fr.anettehaferkorn.backend.model.WineQuery;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FilterByWineStyleTest {

    @Test
    void filteringByWineStyle_ONE_WineStyle() {

        //Given
        List<WineGrape> wineGrapes=List.of(

            new WineGrape("AAAA","dinner","white","France","light","sweet","abcd"),
            new WineGrape("BBBB","dinner","rose","France","strong","dry","abcd"),
            new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
            new WineGrape("DDDD","dinner","white","Italy","strong","dry","abcd"),
            new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd")

        );

        WineQuery wineQuery=new WineQuery("dinner","red","idK","light","sweet");

        //Mock
        List<WineGrape> filteredByWineStyleMock=List.of(
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
                new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd")

        );

        //When
        List<WineGrape>actual=FilterByWineStyle.filteringByWineStyle(wineGrapes,wineQuery);

        //Then
        assertEquals(filteredByWineStyleMock,actual);

    }

    @Test
    void filteringByWineStyle_Multiple_WineStyle() {

        //Given
        List<WineGrape> wineGrapes=List.of(

                new WineGrape("AAAA","dinner","white","France","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","rose","France","strong","dry","abcd"),
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
                new WineGrape("DDDD","dinner","white","Italy","strong","dry","abcd"),
                new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd")

        );

        WineQuery wineQuery=new WineQuery("dinner","red,rose","idK","light","sweet");

        //Mock
        List<WineGrape> filteredByWineStyleMock=List.of(
                new WineGrape("CCCC","dinner","red","France","strong","sweet","abcd"),
                new WineGrape("EEEE","dinner","red","Spain","light","sweet","abcd"),
                new WineGrape("BBBB","dinner","rose","France","strong","dry","abcd")

        );

        //When
        List<WineGrape>actual=FilterByWineStyle.filteringByWineStyle(wineGrapes,wineQuery);

        //Then
        assertEquals(filteredByWineStyleMock,actual);

    }
}