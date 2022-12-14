package com.api.parkingcontrol.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.parkingcontrol.dtos.ParkingSpotDTO;
import com.api.parkingcontrol.models.ParkingSpotModel;
import com.api.parkingcontrol.services.ParkingSpotService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/parking-spot")
public class ParkingSpotController {
	
	final ParkingSpotService parkingSpotService;

	public ParkingSpotController(ParkingSpotService parkingSpotService) {
		this.parkingSpotService = parkingSpotService;
	}
	
	@GetMapping
	public ResponseEntity<Page<ParkingSpotModel>> getAllParkingSpot(@PageableDefault(page = 0, 
			size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable){
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotService.getAllParkingSpot(pageable));
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Object> getOneParkingSpot(@PathVariable UUID id){
		Optional<ParkingSpotModel> parkingSpotModelOptional = parkingSpotService.findBydId(id);
		if(!parkingSpotModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found");
		}
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotModelOptional.get());
	}
	
	@PostMapping
	public ResponseEntity<Object> saveParkingSpot(@RequestBody @Valid ParkingSpotDTO parkingSpotDTO){
		
		if(parkingSpotService.existsByLicensePlateCar(parkingSpotDTO.getLicensePlateCar())) {
			JSONObject jo = new JSONObject("{ \"error\" : \"Conflict: License Plate Car is already in use!\" }");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(jo.toString());
		}
		if(parkingSpotService.existsByParkingSporNumber(parkingSpotDTO.getParkingSpotNumber())) {
			JSONObject jo = new JSONObject("{ \"error\" : \"Conflict: Parking Spot is already in use!\" }");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(jo.toString());
		}
		if(parkingSpotService.existsByApartmentAndBlock(parkingSpotDTO.getApartment(), parkingSpotDTO.getBlock())) {
			JSONObject jo = new JSONObject("{ \"error\" : \"Conflict: Parking Spot already registered for this apartment/block!\" }");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(jo.toString());
		}
		
		var parkingSpotModel = new ParkingSpotModel();
		BeanUtils.copyProperties(parkingSpotDTO, parkingSpotModel);
		parkingSpotModel.setRegistrationDate(LocalDateTime.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(parkingSpotService.save(parkingSpotModel));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Object> deleteParkingSpot(@PathVariable UUID id){
		Optional<ParkingSpotModel> parkingSpotModelOptional = parkingSpotService.findBydId(id);
		if(!parkingSpotModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found!");
		}
		parkingSpotService.delete(parkingSpotModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Parking Spot deleted successfully!");
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Object> updateParkingSpot(@PathVariable UUID id, @RequestBody @Valid 
			ParkingSpotDTO parkingSpotDTO){
		Optional<ParkingSpotModel> parkingSpotModelOptional = parkingSpotService.findBydId(id);
		if(!parkingSpotModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found!");
		}
		
		var parkingSpotModel = new ParkingSpotModel();
		BeanUtils.copyProperties(parkingSpotDTO, parkingSpotModel);
		parkingSpotModel.setId(parkingSpotModelOptional.get().getId());
		parkingSpotModel.setRegistrationDate(parkingSpotModelOptional.get().getRegistrationDate());
		
		/*
		 * var parkingSpotModel = parkingSpotModelOptional.get();
		 * parkingSpotModel.setApartment(parkingSpotDTO.getApartment());
		 * parkingSpotModel.setBlock(parkingSpotDTO.getBlock());
		 * parkingSpotModel.setBrandCar(parkingSpotDTO.getBrandCar());
		 * parkingSpotModel.setColorCar(parkingSpotDTO.getColorCar());
		 * parkingSpotModel.setLicensePlateCar(parkingSpotDTO.getLicensePlateCar());
		 * parkingSpotModel.setModelCar(parkingSpotDTO.getModelCar());
		 * parkingSpotModel.setParkingSpotNumber(parkingSpotDTO.getParkingSpotNumber());
		 * parkingSpotModel.setResponsibleName(parkingSpotDTO.getResponsibleName());
		 */
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotService.save(parkingSpotModel));
	}
	

}
