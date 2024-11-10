public class Main {
    public static void main(String[] args) {
        try {
            // Creating a new user
            User user = new User(1, "John Doe", "john.doe@example.com", "securePassword123");

            // Display user information
            System.out.println(user);

            // Update user name
            user.setName("Jane Doe");
            System.out.println("Updated User: " + user);

            // Update email
            user.setEmail("jane.doe@example.com");
            System.out.println("Updated User: " + user);

            // Attempt to set an invalid email
            user.setEmail("invalid-email"); // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}