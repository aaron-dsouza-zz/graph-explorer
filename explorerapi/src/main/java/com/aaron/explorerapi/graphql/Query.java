package com.aaron.explorerapi.graphql;

import com.aaron.explorerapi.dao.CharacterRepository;
import com.aaron.explorerapi.model.Character;
import com.aaron.explorerapi.model.Node;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private CharacterRepository characterRepository;

    public List<Character> getCharacters(int first, int offset) {
        System.out.println("Characters requested");
        if(offset > 0 && first > 0)
            return characterRepository.findAll().stream().skip(offset).limit(first).collect(Collectors.toList());
        return characterRepository.findAll().stream().collect(Collectors.toList());
    }

    public Node getNode(int id) {
        return characterRepository.findById(id).get();
    }
}
