import java.util.regex.Pattern;

public class User {
    private int userId;
    private String name;
    private String email;
    private String password; // Store hashed password instead

    public User(int userId, String name, String email, String password) {
        this.userId = userId;
        this.name = name;
        setEmail(email); // Validate email during setting
        setPassword(password); // Hash password during setting
    }

    // Getters and setters
    public int getUser Id() {
        return userId;
    }

    public void setUser Id(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }   

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (isValidEmail(email)) {
            this.email = email;
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }

    public String getPassword() {
        return password; // Return hashed password if needed
    }

    public void setPassword(String password) {
        if (isValidPassword(password)) {
            this.password = hashPassword(password); // Store the hashed password
        } else {
            throw new IllegalArgumentException("Password does not meet requirements");
        }
    }

    // Simple email validation
    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return Pattern.matches(emailRegex, email);
    }

    // Simple password validation (example)
    private boolean isValidPassword(String password) {
        return password.length() >= 8; // Example: at least 8 characters
    }

    // Placeholder for password hashing
    private String hashPassword(String password) {
        // Implement a secure hashing algorithm (e.g., BCrypt)
        return password; // Replace this with actual hashing
    }

    @Override
    public String toString() {
        return "User {" +
                "userId=" + userId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
