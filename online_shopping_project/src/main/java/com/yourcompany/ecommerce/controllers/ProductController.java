package com.yourcompany.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yourcompany.ecommerce.models.Product;
import com.yourcompany.ecommerce.repositories.ProductDAO;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductDAO productDAO;

    @GetMapping
    public List<Product> getAllProducts() {
        return productDAO.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return productDAO.getProductById(id);
    }
}
