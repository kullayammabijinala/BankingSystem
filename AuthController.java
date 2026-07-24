package com.bank.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/")
    public String home() {
        return "Auth Service is up and running!";
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        if ("admin".equals(username) && "1234".equals(password)) {
            Map<String, String> response = new HashMap<>();
            response.put("token", "fake-jwt-token-for-" + username);
            response.put("status", "SUCCESS");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(401).body(Map.of("message", "Invalid username or password"));
    }
}