package com.aaron.explorerapi.model;

import java.util.Random;

public class Person {
    private long id;
    private String firstName;
    private String lastName;

    public Person(String firstName, String lastName) {
        this.id = generateUniqueId();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private long generateUniqueId() {
        long leftLimit = 1L;
        long rightLimit = 10000L;
        return leftLimit + (long) (Math.random() * (rightLimit - leftLimit));
    }
}
