package com.servlets;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class ProductServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Fetch product details from the database or business logic
        String productId = request.getParameter("id");
        // Dummy data for demonstration
        String productDetails = "Product ID: " + productId + ", Product Name: Sample Product";
        
        response.setContentType("text/html");
        response.getWriter().println("<h1>Product Details</h1>");
        response.getWriter().println("<p>" + productDetails + "</p>");
    }
}
