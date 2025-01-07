package com.servlets;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class UserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.getWriter().println("UserServlet doGet executed");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get parameters from the form
        String username = request.getParameter("username");
        String email = request.getParameter("email");

        // Store user data in session
        HttpSession session = request.getSession();
        session.setAttribute("username", username);
        session.setAttribute("email", email);

        // Redirect to profile page
        response.sendRedirect("userProfile.jsp");
    }
}
