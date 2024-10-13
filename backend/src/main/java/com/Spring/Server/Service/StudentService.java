package com.Spring.Server.Service;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.Spring.Server.Exception.StudentNotFoundException;
import com.Spring.Server.Exception.studentAlreadyExistException;
import com.Spring.Server.Model.Admin;
import com.Spring.Server.Model.Student;
import com.Spring.Server.Repository.StudentRepositry;

import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {
	private final StudentRepositry studentRepositry;

	public StudentService(StudentRepositry studentRepositry) {
		this.studentRepositry = studentRepositry;
	}

	@Override
	public Page<Student> getStudentsByAdmin(Admin admin, Pageable pageable, String search, String filterByDayes) {
		return studentRepositry.findAll(getSpecification(admin, search, filterByDayes), pageable);
	}

	private Specification<Student> getSpecification(Admin admin, String search, String filterByDayes) {
        return (root, query, criteriaBuilder) -> {
        	
        	// create predicate to filter by admin 
        	var adminPredicate =criteriaBuilder.equal(root.get("admin"), admin);
        	Predicate searchPredicate = criteriaBuilder.conjunction();
            if (search != null || !search.isEmpty()) {
            	String searchPattern = "%" + search.toLowerCase() + "%";
            		  searchPredicate= criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("id").as(String.class)), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("firstName")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("lastName")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("email")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("addharNumber")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("moNumber")), searchPattern)
                );
            }
           var combinedPredicate = criteriaBuilder.and(adminPredicate, searchPredicate);
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime dateFrom = null;
            
            switch(filterByDayes) {
            case "1-day":
            	dateFrom =now.minusDays(1);
            	break;
            case "3-days":
            	dateFrom =now.minusDays(3);
            	break;
            case "5-days":
            	dateFrom =now.minusDays(5);
            	break;
            case "7-days":
            	dateFrom =now.minusDays(7);
            	break;
            case "1-month":
            	dateFrom =now.minusMonths(1);
            	break;
            case "1-years":
            	dateFrom =now.minusYears(1);
            	break;
            default : 
            	dateFrom = null;
            	break;
            }
            
            if (dateFrom != null) {
                var datePredicate = criteriaBuilder.greaterThanOrEqualTo(root.get("datetime"), dateFrom);
                combinedPredicate = criteriaBuilder.and(combinedPredicate, datePredicate);
            }else {
            	
            }
            return combinedPredicate;
        };
    }

	@Override
	public Student addStudent(Student student, Admin admin) {
		if (studentAlreadyExist(student.getAddharNumber())) {
			throw new studentAlreadyExistException(student.getAddharNumber() + " already exists!");
		}
		student.setAdmin(admin); // Associate the student with the admin
		return studentRepositry.save(student);
	}

	@Override
	public Student updateStudent(Student student, Long id) {
		return studentRepositry.findById(id).map(existingStudent -> {
			existingStudent.setFirstName(student.getFirstName());
			existingStudent.setLastName(student.getLastName());
			existingStudent.setFatherName(student.getFatherName());
			existingStudent.setEmail(student.getEmail());
			existingStudent.setAddharNumber(student.getAddharNumber());
			existingStudent.setMoNumber(student.getMoNumber());
			existingStudent.setParentMoNumber(student.getParentMoNumber());
			existingStudent.setCurrentAddress(student.getCurrentAddress());
			existingStudent.setParmanentAddress(student.getParmanentAddress());
			existingStudent.setGender(student.getGender());
			existingStudent.setDoBirth(student.getDoBirth());
			existingStudent.setDatetime(student.getDatetime());
			return studentRepositry.save(existingStudent);
		}).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found"));
	}

	@Override
	public Student getStudentById(Long id) {
		return studentRepositry.findById(id)
				.orElseThrow(() -> new StudentNotFoundException("Sorry, no student found with the ID: " + id));
	}

	@Override
	public void deleteStudent(Long id) {
		if (!studentRepositry.existsById(id)) {
			throw new StudentNotFoundException("Sorry, student not found");
		}
		studentRepositry.deleteById(id);
	}

	private boolean studentAlreadyExist(String adharNumber) {
		return studentRepositry.existsByAddharNumber(adharNumber);
	}
}
