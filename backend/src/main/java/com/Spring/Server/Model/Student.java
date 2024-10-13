package com.Spring.Server.Model;

import java.time.LocalDateTime;

import org.hibernate.annotations.NaturalId;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
	@SequenceGenerator(name = "user_seq", sequenceName = "user_sequence", initialValue = 2420, allocationSize = 1)
	private Long id;
	private String firstName;
	private String lastName;
	private String fatherName;
	private String email;
	@NaturalId(mutable = true)
	private String addharNumber;
	private String moNumber;
	private String parentMoNumber;
	private String currentAddress;
	private String parmanentAddress;
	private String gender;
	private String DoBirth;
	@DateTimeFormat(pattern = "MM/dd/yyyy hh:mm a")
	private LocalDateTime datetime;

	@ManyToOne // Many students can belong to one user
	@JoinColumn(name = "admin_id", nullable = false)
	private Admin admin; // Add this field

	// No-args constructor required by JPA
	public Student() {
	}

	// Parameterized constructor

	public Student(Long id, String firstName, String lastName, String fatherName, String email, String addharNumber,
			String moNumber, String parentMoNumber, String currentAddress, String parmanentAddress, String gender,
			String doBirth, LocalDateTime datetime, Admin admin) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.fatherName = fatherName;
		this.email = email;
		this.addharNumber = addharNumber;
		this.moNumber = moNumber;
		this.parentMoNumber = parentMoNumber;
		this.currentAddress = currentAddress;
		this.parmanentAddress = parmanentAddress;
		this.gender = gender;
		DoBirth = doBirth;
		this.datetime = datetime;
		this.admin = admin;
	}

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddharNumber() {
		return addharNumber;
	}

	public void setAddharNumber(String addharNumber) {
		this.addharNumber = addharNumber;
	}

	public String getMoNumber() {
		return moNumber;
	}

	public void setMoNumber(String moNumber) {
		this.moNumber = moNumber;
	}

	public String getParentMoNumber() {
		return parentMoNumber;
	}

	public void setParentMoNumber(String parentMoNumber) {
		this.parentMoNumber = parentMoNumber;
	}

	public String getCurrentAddress() {
		return currentAddress;
	}

	public void setCurrentAddress(String currentAddress) {
		this.currentAddress = currentAddress;
	}

	public String getParmanentAddress() {
		return parmanentAddress;
	}

	public void setParmanentAddress(String parmanentAddress) {
		this.parmanentAddress = parmanentAddress;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDoBirth() {
		return DoBirth;
	}

	public void setDoBirth(String doBirth) {
		DoBirth = doBirth;
	}

	public LocalDateTime getDatetime() {
		return datetime;
	}

	public void setDatetime(LocalDateTime datetime) {
		this.datetime = datetime;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

}