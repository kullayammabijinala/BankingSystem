package com.bank.transaction.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @GetMapping("/")
    public String home() {
        return "Transaction Service is up!";
    }

    @GetMapping
    public List<Map<String, Object>> getTransactions() {
        List<Map<String, Object>> list = new ArrayList<>();
        
        Map<String, Object> txn1 = new HashMap<>();
        txn1.put("id", "TXN9901");
        txn1.put("amount", 250.00);
        txn1.put("type", "DEBIT");
        txn1.put("date", "2026-07-24");
        
        list.add(txn1);
        return list;
    }
}