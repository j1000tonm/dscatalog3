package com.j1000tonm.dscatalog3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.j1000tonm.dscatalog3.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
