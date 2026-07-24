package com.bank.loan.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    @GetMapping("/")
    public String home() {
        return "Loan Service is up!";
    }

    @GetMapping
    public List<Map<String, Object>> getLoans() {
        List<Map<String, Object>> loans = new ArrayList<>();
        
        Map<String, Object> loan1 = new HashMap<>();
        loan1.put("loanId", "LN5001");
        loan1.put("type", "Education Loan");
        loan1.put("amount", 200000.00);
        loan1.put("status", "APPROVED");
        
        loans.add(loan1);
        return loans;
    }
}