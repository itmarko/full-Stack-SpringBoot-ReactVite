package com.Spring.Server.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Spring.Server.Model.Admin;
import com.Spring.Server.Repository.AdminRepository;


@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Use PasswordEncoder here

    public void register(Admin admin) {
        admin.setPassword(hashPassword(admin.getPassword()));
        adminRepository.save(admin);
    }

    public Optional<Admin> login(String username, String password) {
        return adminRepository.findByUsername(username)
            .filter(user -> verifyPassword(password, user.getPassword()));
    }

    private String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    private boolean verifyPassword(String password, String hashed) {
        return passwordEncoder.matches(password, hashed);
    }
}