package com.aaron.explorerapi.dao;

import com.aaron.explorerapi.model.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Integer> {
}
