package com.Spring.Server.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.Spring.Server.Exception.StudentNotFoundException;
import com.Spring.Server.Exception.studentAlreadyExistException;
import com.Spring.Server.Model.Admin;
import com.Spring.Server.Model.Student;
import com.Spring.Server.Repository.StudentRepositry;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {
    private final StudentRepositry studentRepositry;


    public StudentService(StudentRepositry studentRepositry) {
		this.studentRepositry = studentRepositry;
	}

	@Override
	public Page<Student> getStudentsByAdmin(Admin admin, Pageable pageable, String search) {
	    return studentRepositry.findAll(getSpecification(admin, search), pageable);
	}


	private Specification<Student> getSpecification(Admin admin, String search) {
        return (root, query, criteriaBuilder) -> {

            if (search == null || search.isEmpty()) {
                return criteriaBuilder.equal(root.get("admin"), admin);
            }

            String searchPattern = "%" + search.toLowerCase() + "%";

            return criteriaBuilder.and(
                criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("id").as(String.class)), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("firstName")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("lastName")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("email")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("addharNumber")), searchPattern),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("moNumber")), searchPattern)
                ),
                criteriaBuilder.equal(root.get("admin"), admin)
            );

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
