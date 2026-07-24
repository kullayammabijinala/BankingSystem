package com.bank.account.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @GetMapping("/")
    public String home() {
        return "Account Service is up!";
    }

    @GetMapping
    public List<Map<String, Object>> getAccounts() {
        List<Map<String, Object>> accounts = new ArrayList<>();
        
        Map<String, Object> acc1 = new HashMap<>();
        acc1.put("accountNumber", "ACC1001");
        acc1.put("type", "Savings");
        acc1.put("balance", 5000.00);
        
        accounts.add(acc1);
        return accounts;
    }
}