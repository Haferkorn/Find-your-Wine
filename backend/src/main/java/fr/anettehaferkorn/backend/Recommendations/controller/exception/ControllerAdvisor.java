package fr.anettehaferkorn.backend.Recommendations.controller.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.NoSuchElementException;

@Slf4j
@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ApiError> handleNoSuchElementException(NoSuchElementException ex){
        log.error("Resource not found!", ex);

        ApiError apiError = new ApiError("Resource not found!", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NoMatchingWineException.class)
    public ResponseEntity<ApiError> handleNomatchingWineException(NoMatchingWineException ex){
        log.error("Resource not found!", ex);

        ApiError apiError = new ApiError("Resource not found!", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiError> handleIllegalArgumentException(IllegalArgumentException ex){
        log.error("Given input is not processable!", ex);

        ApiError apiError = new ApiError("Given input is not processable!", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ApiError> handleUnknownException(Throwable ex){
        log.error("Unknown Error!", ex);

        ApiError apiError = new ApiError("Unknown Error!", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}