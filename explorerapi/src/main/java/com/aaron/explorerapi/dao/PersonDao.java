package com.aaron.explorerapi.dao;

import com.aaron.explorerapi.model.Person;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PersonDao {
    public List<Person> getPersons() {
        return Arrays.asList(new Person[]{
                new Person("Han", "Solo"),
                new Person("Luke", "Skywalker"),
                new Person("Leia", "Organa")
        });
    }
}
