package com.bank.customer.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @GetMapping("/")
    public String home() {
        return "Customer Service is up!";
    }

    @GetMapping("/profile")
    public Map<String, Object> getCustomerProfile() {
        Map<String, Object> profile = new HashMap<>();
        profile.put("id", 101);
        profile.put("name", "Bijinala Kullayamma");
        profile.put("email", "kullayamma@example.com");
        profile.put("phone", "+91 9876543210");
        return profile;
    }
}