package fr.anettehaferkorn.backend.Recommendations.controller.exception;

import java.util.NoSuchElementException;

public class NoMatchingWineException extends NoSuchElementException {

    public NoMatchingWineException(String message) {
        super(message);
    }

    public NoMatchingWineException(String message, Exception e) {
        super(message, e);
    }
}