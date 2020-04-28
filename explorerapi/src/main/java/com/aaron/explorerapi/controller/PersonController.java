package com.aaron.explorerapi.controller;

import java.util.Arrays;
import java.util.List;

import com.aaron.explorerapi.dao.PersonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aaron.explorerapi.model.Person;

@RestController
@RequestMapping("/persons")
@CrossOrigin(origins = "*")
public class PersonController {
    @Autowired
    private PersonDao personDao;

    @GetMapping
    public List<Person> getPersons() {
        return personDao.getPersons();
    }
}