package com.j1000tonm.dscatalog3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.j1000tonm.dscatalog3.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
