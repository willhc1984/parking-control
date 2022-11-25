package com.api.parkingcontrol.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.parkingcontrol.models.RoleModel;

@Repository
public interface RoleRepository extends JpaRepository<RoleModel, UUID>{

}
