package com.Spring.Server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.Spring.Server.Model.Student;

@Repository
public interface StudentRepositry extends JpaRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    boolean existsByAddharNumber(String adharNumber);
}
