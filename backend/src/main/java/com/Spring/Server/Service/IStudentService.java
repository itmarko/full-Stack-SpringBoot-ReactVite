package com.Spring.Server.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.Spring.Server.Model.Admin;
import com.Spring.Server.Model.Student;

public interface IStudentService {
    Student addStudent(Student student, Admin admin);
    Page<Student> getStudentsByAdmin(Admin admin, Pageable pageable, String search, String filterByDayes);
    Student updateStudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}
