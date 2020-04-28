package com.aaron.explorerapi.graphql;

import com.aaron.explorerapi.dao.CharacterRepository;
import com.aaron.explorerapi.model.Character;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private CharacterRepository characterRepository;

    public List<Character> getCharacters() {
        return characterRepository.findAll().stream().collect(Collectors.toList());
    }
}
