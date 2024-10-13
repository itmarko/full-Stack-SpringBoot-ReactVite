package com.Spring.Server.Controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.Server.Exception.studentAlreadyExistException;
import com.Spring.Server.Model.Admin;
import com.Spring.Server.Model.Student;
import com.Spring.Server.Service.AdminService;
import com.Spring.Server.Service.StudentService;

import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@Autowired
	private StudentService studentService;

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody Admin admin) {
		try {
			adminService.register(admin);
			return ResponseEntity.ok("User registered successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering user");
		}
	}

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Admin admin, HttpServletRequest request) {
		return adminService.login(admin.getUsername(), admin.getPassword()).map(u -> {
			request.getSession().setAttribute("user", u);
			return ResponseEntity.ok("Login successful");
		}).orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials"));
	}

	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return ResponseEntity.ok("Logged out successfully");
	}

	@PostMapping("/students")
	public ResponseEntity<String> addStudent(@RequestBody Student student, HttpServletRequest request) {
		Admin admin = (Admin) request.getSession().getAttribute("user");
		if (admin == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
		}
		try {
			studentService.addStudent(student, admin);
			return ResponseEntity.ok("Student added successfully");
		} catch (studentAlreadyExistException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		} catch (Exception e) {
			// Log the exception
			LoggerFactory.getLogger(AdminController.class).error("Error adding student", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error adding student: " + e.getMessage());
		}
	}

	@GetMapping("/students")
	public ResponseEntity<Page<Student>> getStudents(HttpServletRequest request,
			@RequestParam(defaultValue = "0") int pageNumber, // default to page 0
			@RequestParam(defaultValue = "10") int pageSize, // default to 10 records per page
			@RequestParam(required = false) String search, // Add search parameter
			@RequestParam("filterByDays") String filterByDayes) {
		Admin admin = (Admin) request.getSession().getAttribute("user"); // Get the logged-in user
		if (admin == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		Pageable pageable = PageRequest.of(pageNumber, pageSize); // Create Pageable object
		Page<Student> students = studentService.getStudentsByAdmin(admin, pageable, search, filterByDayes);
		return ResponseEntity.ok(students);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteStudent(@PathVariable Long id) {
		studentService.deleteStudent(id);
	}
	@GetMapping("student/{id}")
	public Student getStudent(@PathVariable Long id) {
		return studentService.getStudentById(id);
	}
	@PutMapping("/update/{id}")
	public Student updateStudent(@RequestBody Student student, @PathVariable Long id) {
		return studentService.updateStudent(student, id);
	}
}
