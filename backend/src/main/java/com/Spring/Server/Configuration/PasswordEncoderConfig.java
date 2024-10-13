package com.Spring.Server.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordEncoderConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Argon2PasswordEncoder(
            16,  // salt length (recommended: 16 bytes)
            32,  // hash length (recommended: 32 bytes)
            1,   // parallelism (1 thread)
            65536, // memory (64 MB)
            3    // iterations (3 iterations)
        );
    }
}