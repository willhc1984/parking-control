package com.api.parkingcontrol.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.api.parkingcontrol.models.ParkingSpotModel;
import com.api.parkingcontrol.repositories.ParkingSpotRepository;

@Service
public class ParkingSpotService {

	final ParkingSpotRepository parkingSpotRepository;
	
	public ParkingSpotService(ParkingSpotRepository parkingSpotRepository) {
		this.parkingSpotRepository = parkingSpotRepository;
	}
	
	@Transactional
	public ParkingSpotModel save(ParkingSpotModel parkingSpotModel) {		
		return parkingSpotRepository.save(parkingSpotModel);
	}

	public List<ParkingSpotModel> getAllParkingSpot() {
		return parkingSpotRepository.findAll();
	}

	public boolean existsByLicensePlateCar(String licensePlateCar) {		
		return parkingSpotRepository.existsByLicensePlateCar(licensePlateCar);
	}

	public boolean existsByParkingSporNumber(String parkingSpotNumber) {		
		return parkingSpotRepository.existsByParkingSpotNumber(parkingSpotNumber);
	}

	public boolean existsByApartmentAndBlock(String apartment, String block) {		
		return parkingSpotRepository.existsByApartmentAndBlock(apartment, block);
	}

	public Optional<ParkingSpotModel> findBydId(UUID id) {
		return parkingSpotRepository.findById(id);
	}	

}
